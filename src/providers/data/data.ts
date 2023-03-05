export interface Data {
  id: string;
  title: string;
  completed: boolean;
}

export interface DataAll {
  dataApiOne: Data | null;
  dataApiTwo: Data | null;
  dataApiThree: Data | null;
}
