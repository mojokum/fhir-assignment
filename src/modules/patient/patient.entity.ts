import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  CreatedAt,
  AutoIncrement,
} from "sequelize-typescript";
@Table({ tableName: "patient", freezeTableName: true, updatedAt: false })
export class Patient extends Model<Patient> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  patientId: number;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  initial: string;

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  phone: string;

  @Column(DataType.INTEGER)
  age: number;

  @Column(DataType.STRING)
  gender: string;

  @Column(DataType.STRING)
  maritalStatus: string;

  @Column(DataType.STRING)
  createdby: string;

  @CreatedAt
  createdat: string;
}
