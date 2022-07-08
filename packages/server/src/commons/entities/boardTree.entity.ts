import { ApiProperty } from "@nestjs/swagger";
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { Board } from "./board.entity";
import { CommonEntity } from "./common.entity";

@Entity()
export class BoardTree extends CommonEntity {
  @OneToOne(() => Board)
  @JoinColumn()
  board: Board;

  @OneToOne(() => Board)
  @JoinColumn()
  parentBoard: Board;
}
