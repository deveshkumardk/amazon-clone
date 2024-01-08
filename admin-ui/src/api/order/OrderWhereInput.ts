import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  paymentintent?: StringNullableFilter;
  paymentStatus?: BooleanNullableFilter;
  price?: FloatNullableFilter;
  products?: ProductListRelationFilter;
  status?: JsonFilter;
  user?: UserWhereUniqueInput;
};
