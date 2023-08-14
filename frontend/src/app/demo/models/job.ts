export interface Job {
    description: string;
    expected_delivery_time: number;
    budget: number;
    requirement_document: File | string | null;
    status: string;
    category: string;
    


  }
  