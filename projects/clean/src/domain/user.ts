export class User {
  constructor(
    public id: number,
    public email: string,
    public firstname: string,
    public lastname: string,
    public gender: string,
    public imageUrl: string,
    public createdAt: Date,
  ) {}
}
