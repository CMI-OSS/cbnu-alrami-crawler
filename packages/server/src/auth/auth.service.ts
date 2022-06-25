/* eslint-disable no-useless-constructor */
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { AdminService } from "src/admin/admin.service";
import { AdminCreateDto } from "src/admin/dto/adminCreate.dto";
import { errors } from "src/commons/error";
import { UserService } from "src/user/user.service";

import { AdminCredential } from "./dto/adminCredential.dto";
import { AdminLoginDto } from "./dto/adminLogin.dto";
import { TokenDto } from "./dto/token.dto";

const { LOGIN_INFO_NOT_FOUND } = errors;

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private adminService: AdminService,
    private jwtService: JwtService,
  ) {}

  private static matchPassword(
    inputPassword: string,
    entityPassword: string,
  ): boolean {
    if (!bcrypt.compareSync(inputPassword, entityPassword)) return false;
    return true;
  }

  async join(adminCreateDto: AdminCreateDto): Promise<boolean> {
    await this.adminService.create(adminCreateDto);
    return true;
  }

  async adminLogin(adminCredential: AdminCredential): Promise<TokenDto> {
    const tokens: TokenDto = {
      xAccessToken: this.jwtService.sign(adminCredential),
      // TODO xRefreshToken: this.jwtService.sign({ id:admin.id })
    };
    return tokens;
  }

  async validate({
    loginId,
    password,
  }: AdminLoginDto): Promise<AdminCredential> {
    const { password: hashedPassword, ...admin } =
      await this.adminService.findOne({
        select: [ "id", "authority", "nickname", "password" ],
        where: { loginId },
      });
    if (!admin || !AuthService.matchPassword(password, hashedPassword))
      throw LOGIN_INFO_NOT_FOUND;
    return admin;
  }

  // modifyPassword(newPassword:string, entityPassword:string): boolean{
  //   return true;
  // }
}
