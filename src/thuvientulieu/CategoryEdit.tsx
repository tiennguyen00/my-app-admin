import * as React from "react";
import {
  Datagrid,
  Edit,
  EditButton,
  NumberField,
  Labeled,
  ReferenceManyField,
  SimpleForm,
  TextInput,
  useTranslate,
  useRecordContext,
} from "react-admin";

import ThumbnailField from "../products/ThumbnailField";
import ProductRefField from "../products/ProductRefField";
import {Category} from "../types";

const CategoryEdit = () => {
  return (
    <Edit title={<CategoryTitle />}>
      <SimpleForm>
        <TextInput source="name" />
        <Labeled label="duandalam" fullWidth>
          <ReferenceManyField
            reference="products"
            target="projected_id"
            perPage={20}
          >
            <Datagrid
              sx={{
                "& .column-thumbnail": {
                  width: 25,
                  padding: 0,
                },
              }}
            >
              <ThumbnailField source="imageThumbnail" label="" />
              {/* <ProductRefField source="reference" />
              <NumberField
                source="price"
                options={{style: "currency", currency: "USD"}}
              />
              <NumberField
                source="width"
                options={{minimumFractionDigits: 2}}
              />
              <NumberField
                source="height"
                options={{minimumFractionDigits: 2}}
              />
              <NumberField source="stock" />
              <NumberField source="sales" />
              <EditButton /> */}
            </Datagrid>
          </ReferenceManyField>
        </Labeled>
      </SimpleForm>
    </Edit>
  );
};

const CategoryTitle = () => {
  const record = useRecordContext<Category>();
  console.log("Record: ", record);

  return record ? <span>{record.name}&quot;</span> : null;
};

export default CategoryEdit;