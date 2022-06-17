import {
  DateInput,
  Edit,
  NullableBooleanInput,
  TextInput,
  PasswordInput,
  SimpleForm,
  useTranslate,
} from "react-admin";
import {Grid, Box, Typography} from "@mui/material";

const OtherList = () => {
  return (
    <SimpleForm>
      <div>
        <Grid container width={{xs: "100%", xl: 800}} spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
              "Thông tin liên hệ"
            </Typography>
            <Box display={{xs: "block", sm: "flex"}}>
              <Box flex={1} mr={{xs: 0, sm: "0.5em"}}>
                <TextInput source="Tên 1" isRequired fullWidth />
              </Box>
              <Box flex={1} mr={{xs: 0, sm: "0.5em"}}>
                <TextInput
                  source="Số điện thoại 1"
                  type="number"
                  isRequired
                  fullWidth
                />
              </Box>
            </Box>
            <Box display={{xs: "block", sm: "flex"}}>
              <Box flex={1} mr={{xs: 0, sm: "0.5em"}}>
                <TextInput source="Tên 2" isRequired fullWidth />
              </Box>
              <Box flex={1} mr={{xs: 0, sm: "0.5em"}}>
                <TextInput
                  source="Số điện thoại 2"
                  type="number"
                  isRequired
                  fullWidth
                />
              </Box>
            </Box>
            <TextInput type="email" source="Email" isRequired fullWidth />
            {/* <Box display={{xs: "block", sm: "flex"}}>
              <Box flex={1} mr={{xs: 0, sm: "0.5em"}}>
                <DateInput source="birthday" fullWidth helperText={false} />
              </Box>
              <Box flex={2} ml={{xs: 0, sm: "0.5em"}} />
            </Box> */}

            <Box mt="1em" />

            <Typography variant="h6" gutterBottom>
              "Thông tin khác"
            </Typography>
            <TextInput
              source="Địa chỉ văn phòg"
              multiline
              fullWidth
              required
              helperText={false}
            />
            <TextInput
              source="Địa chỉ chi nhánh"
              multiline
              fullWidth
              required
              helperText={false}
            />
            <TextInput
              source="Địa chỉ xưởng"
              multiline
              required
              fullWidth
              helperText={false}
            />
            <TextInput
              source="Link facebook"
              multiline
              required
              fullWidth
              helperText={false}
            />
            <TextInput
              source="Link youtube"
              multiline
              required
              fullWidth
              type="url"
              helperText={false}
            />
            {/* <Box display={{xs: "block", sm: "flex"}}>
              <Box flex={2} mr={{xs: 0, sm: "0.5em"}}>
                <TextInput source="city" fullWidth helperText={false} />
              </Box>
              <Box flex={1} mr={{xs: 0, sm: "0.5em"}}>
                <TextInput source="stateAbbr" fullWidth helperText={false} />
              </Box>
              <Box flex={2}>
                <TextInput source="zipcode" fullWidth helperText={false} />
              </Box>
            </Box>

            <Box mt="1em" />

            <Typography variant="h6" gutterBottom>
              "3"
            </Typography>
            <Box display={{xs: "block", sm: "flex"}}>
              <Box flex={1} mr={{xs: 0, sm: "0.5em"}}>
                <PasswordInput source="password" fullWidth />
              </Box>
              <Box flex={1} ml={{xs: 0, sm: "0.5em"}}>
                <PasswordInput source="confirm_password" fullWidth />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              "4"
            </Typography> */}

            {/* <SegmentsInput fullWidth /> */}
          </Grid>
        </Grid>
      </div>
    </SimpleForm>
  );
};

export default OtherList;
