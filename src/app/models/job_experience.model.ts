export interface JobExperience {
  title: string;
  company: string;
  flag: string;
  fromText: string;
  fromTime: string;
  toText: string;
  toTime?: string;
  activities: string[];
  tags: string[];
}