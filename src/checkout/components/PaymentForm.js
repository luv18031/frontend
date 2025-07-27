import { Grid, OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FormLabel } from 'react-bootstrap';




const FormGrid = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function PaymentForm() {



  return (
    <Grid container spacing={1}>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="channel-name" required>
          Channel Name
        </FormLabel>
        <OutlinedInput
          id="channel-name" 
          name="channel-name" 
          type="text"
          placeholder="Youtube Channel Name"
          autoComplete="you tube channel name"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="subscriber-count" required>
          Subscriber Count
        </FormLabel>
        <OutlinedInput
          id="subscriber-count"
          name="subscriber-count"
          type="text"
          placeholder="subscriber Count"
          autoComplete="subscriber-count"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="video count" required>
          Video count
        </FormLabel>
        <OutlinedInput
          id="video count" 
          name="video count" 
          type="video count" 
          placeholder="video count" 
          autoComplete="video count" 
          required
          size="video count" 
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="channel URL" required>
          Channel URL
        </FormLabel>
        <OutlinedInput
          id="channel URL" 
          name="channel URL" 
          type="channel URL" 
          placeholder="channel URL" 
          autoComplete="channel URL" 
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="screenshots">Youtube chaneel Screenshots</FormLabel>
        <OutlinedInput
          id="screenshots"
          name="screenshots"
          type="file"
          placeholder="screenshots"
          autoComplete="screenshots"
          accept="image/*"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="screenshots2">Youtube chaneel Screenshots</FormLabel>
        <OutlinedInput
          id="screenshots2"
          name="screenshots2"
          type="file"
          placeholder="screenshots2"
          autoComplete="screenshots2"
          accept="image/*"
          required
          size="small"
        />
      </FormGrid>
      
    </Grid>
  );
}
