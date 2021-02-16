export interface Workspace {
  serviceRequestId: string;
  mfsTenantId: string;
  serviceFlow: string;
  transactionTimeStamp: string;
  originalServiceRequestId: string;
  status: string;
  workspaceCategoryDetails: WorkspaceDetails[];
}

export interface WorkspaceDetails {
  workspaceId: string;
  workspaceName: string;
  categories: Category[];
}

export interface Category {
  categoryId: string;
  categoryName: string;
}
