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

const OtherEdit = () => {
  return (
    <SimpleForm>
      <div>
        <Grid container width={{xs: "100%", xl: 800}} spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
              "Lien He"
            </Typography>
            <Box display={{xs: "block", sm: "flex"}}>
              <Box flex={1} mr={{xs: 0, sm: "0.5em"}}>
                <TextInput source="first_name" isRequired fullWidth />
              </Box>
              <Box flex={1} ml={{xs: 0, sm: "0.5em"}}>
                <TextInput source="last_name" isRequired fullWidth />
              </Box>
            </Box>
            <TextInput type="email" source="email" isRequired fullWidth />
            <Box display={{xs: "block", sm: "flex"}}>
              <Box flex={1} mr={{xs: 0, sm: "0.5em"}}>
                <DateInput source="birthday" fullWidth helperText={false} />
              </Box>
              <Box flex={2} ml={{xs: 0, sm: "0.5em"}} />
            </Box>

            <Box mt="1em" />

            <Typography variant="h6" gutterBottom>
              "BALA"
            </Typography>
            <TextInput
              source="address"
              multiline
              fullWidth
              helperText={false}
            />
            <Box display={{xs: "block", sm: "flex"}}>
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
              "345"
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
              "678"
            </Typography>

            {/* <SegmentsInput fullWidth /> */}
            <NullableBooleanInput fullWidth source="has_newsletter" />
          </Grid>
        </Grid>
      </div>
    </SimpleForm>
  );
};

export default OtherEdit;
