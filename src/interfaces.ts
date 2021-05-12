export interface Posts {
  id: number;
  category: string;
  subject: string;
  uploadDate: string;
  status: string;
}

export interface PostDetail {
  id: number;
  category: string;
  subject: string;
  content: string;
  uploadDate: string;
}
