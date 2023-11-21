export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
  };
}

export interface BooksResponse extends Record<string, unknown> {
  items: Book[];
}
