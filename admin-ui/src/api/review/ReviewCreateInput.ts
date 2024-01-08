import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  product?: ProductWhereUniqueInput | null;
  rating: number;
  user?: UserWhereUniqueInput | null;
};
