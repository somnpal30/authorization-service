export interface AttributeState {
  attributeType: string;
  attributes: string[];
}

export const initialAttributeState: AttributeState = {
  attributeType: '',
  attributes: []
};
