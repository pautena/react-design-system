import { Model } from "../../generators.model";

export interface BaseScreenProps {
  /**
   * UI-friendly string that represents the model
   */
  modelName: string;

  /**
   * Structure that represents the fields of the model
   */
  model: Model;
}
