export interface AccessAuthProps {
  isPrivate: boolean;
}

export interface RouteListType {
  id: string;
  path: string;
  private: boolean;
  element: React.ReactNode;
}
