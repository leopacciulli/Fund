export interface Fund {
  id: number;
  title: string;
  sigla: string;
  type: string;
  value: string;
  percentage: string;
  percentageValue: string;
  imageType: string;
  year: string;
  info: {
    aum: string;
    issueDate: string;
    vintageRange: string;
    ter: string;
    priceAtClose: string;
    priceAtOpen: string;
  };
}
