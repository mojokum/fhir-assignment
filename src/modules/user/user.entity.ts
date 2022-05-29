import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  CreatedAt,
  AutoIncrement,
} from "sequelize-typescript";
@Table({ tableName: "user", freezeTableName: true, updatedAt: false })
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.TEXT)
  password: string;

  @Column(DataType.STRING)
  createdby: string;

  @CreatedAt
  createdat: string;
}
