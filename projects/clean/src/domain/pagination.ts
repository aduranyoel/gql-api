export class Pagination {
  constructor(
    public page: number,
    public limit: number,
    public total: number,
    public nextPage: number,
    public totalPages: number,
  ) {}
}
