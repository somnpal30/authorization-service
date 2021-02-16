export interface ModuleAndServices{
  modules:Module[];
}
export interface Module {
  name : string;
  privileges : Privilege[];
}
export interface Privilege {
  code: string;
  name: string;
  attributes : string[];
}


