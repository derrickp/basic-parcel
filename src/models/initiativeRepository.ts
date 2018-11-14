import initiatives from "../data/initiatives";
import Initiative from "./initiative";

export default class InitiativeRepository {
  url: string;
  initiativeTransform: (records: any) => Initiative[];
  constructor(
    url: string,
    initiativeTransform: (records: any) => Initiative[]
  ) {
    this.url = url;
    this.initiativeTransform = initiativeTransform;
  }

  async readAll(): Promise<Initiative[]> {
    return Promise.resolve(this.initiativeTransform(initiatives));
  }
}
