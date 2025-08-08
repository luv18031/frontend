import { MenuItem, Select } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Components/context/AuthContext';
import { userApi } from '../../Components/misc/UserApi';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AddressForm({userDetails, setUserDetails}) {

  const [register_as, setRegisterAs] = React.useState('');

  const [isLoading, setIsLoading] = useState(true);

  const handleRegisterChange = (event) => {
    setRegisterAs(event.target.value);
  };

  useEffect(() => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      register_as: register_as // Store the text input value
    }));
  }, [register_as]);

  const Auth = useAuth()

  const user = Auth.getUser()

  const [profile, setProfile] = useState(null);
  
  useEffect(() => { 
    const fetchUserProfile = async () => {
      try {
        const response = await userApi.getUserProfile(user)
        setProfile(null)
        // fetch(`http://localhost:8080/api/profile?username=${user.data.sub}`, {
        //   method: 'GET',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'Authorization': `Bearer ${user.accessToken}`
        //   }
        // }).then(response => {
        //   if (!response.ok) {
        //     throw new Error('Network response was not ok');
        //   }
        //   return response.json();
        // }).then(data => {
        //   console.log("User profile fetched successfully:", data);
        // });
        console.log("User profile fetched successfully:", response.data)
        
        setRegisterAs(response.data.register_as || '');

        setUserDetails({
          name: user.data.sub,
          address: response.data.address || '',
          city: response.data.city || '',
          state: response.data.state || '',
          pinCode: response.data.pinCode || '',
          country: response.data.country || '',   
          email: response.data.email || '',
          phoneNumber: response.data.phoneNumber || '',
          profilePicture: response.data.profilePicture || null,
          governmentPictureId: response.data.governmentPictureId || null,
          register_as: response.register_as || ''
        });

      } catch (error) {
        console.error("Error fetching user profile:", error)
      } finally {
        setIsLoading(false);
      }
    // }catch (error) {
    //     console.error("Error fetching user profile:", error)
    //   }


    }
    fetchUserProfile()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("name and value:", name, value);

    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value // Store the text input value
    }));
  };

  if(isLoading) {
      return <div>Loading...</div>
  }


  if(!user) {
      return <Navigate to={'/login'} />
  }


  return (
    <Grid container spacing={1}>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="name" required>
          Name
        </FormLabel>
        <OutlinedInput
          id="name"
          name="name"
          type="name"
          placeholder="John"
          autoComplete="name"
          required
          size="small"
          value={userDetails.name}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="email" required>
          Email
        </FormLabel>
        <OutlinedInput
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="email"
          required
          value={userDetails.email}
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="phone-number" required>
          Phone Number
        </FormLabel>
        <OutlinedInput
        onChange={handleChange}
          id="phone-number"
          name="phoneNumber"
          type="tel"
          placeholder="phone-number"
          autoComplete="phone-number"
          required
          value={userDetails.phoneNumber}
          size="phone-number"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="register-as" required>
          Register As
        </FormLabel>
         <Select
          labelId="select-label"
          id="select-label"
          value={register_as}
          label="register-as"
          onChange={handleRegisterChange}
        >
          <MenuItem value={"Individual Label"}>Individual Label</MenuItem>
          <MenuItem value={"Distributor"}>Distributor</MenuItem>
          <MenuItem value={"Individual Artist"}>Individual Artist</MenuItem>
        </Select>
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address" required>
          Address line 1
        </FormLabel>
        <OutlinedInput
        onChange={handleChange}
          id="address"
          name="address"
          type="text"
          placeholder="Street name and number"
          autoComplete="shipping address-line1"
          required
          value={userDetails.address}
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address2">Address line 2</FormLabel>
        <OutlinedInput
        onChange={handleChange}
          id="address2"
          name="address2"
          type="text"
          placeholder="Apartment, suite, unit, etc. (optional)"
          autoComplete="shipping address-line2"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="profilePicture">Profile Pic</FormLabel>
        <OutlinedInput
          id="profilePicture"
          type="file" 
          accept="image/*"
          required
        />
      </FormGrid>
      {/* {
        profile && 
        (
          <img
             alt="not found"
             width={"250px"}
             src={URL.createObjectURL(profile)}
           />
        )
      } */}
       <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="governmentPictureId">Government Id Pic</FormLabel>
        <OutlinedInput
          // onChange={handleFileChange}
          id="governmentPictureId"
          name="governmentPictureId"
          type="file" 
          accept="image/*"
          required
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="city" required>
          City
        </FormLabel>
        <OutlinedInput
        onChange={handleChange}
          id="city"
          name="city"
          type="text"
          placeholder="New York"
          autoComplete="City"
          value={userDetails.city}
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="state" required>
          State
        </FormLabel>
        <OutlinedInput
        onChange={handleChange}
          id="state"
          name="state"
          type="text"
          placeholder="NY"
          autoComplete="State"
          required
          value={userDetails.state}
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="zip" required>
          Zip / Postal code
        </FormLabel>
        <OutlinedInput
        onChange={handleChange}
          id="zip"
          name="pinCode"
          type="number"
          placeholder="12345"
          autoComplete="shipping postal-code"
          required
          value={userDetails.pinCode}
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="country" required>
          Country
        </FormLabel>
        <OutlinedInput
        onChange={handleChange}
          id="country"
          name="country"
          type="text"
          placeholder="United States"
          autoComplete="shipping country"
          required
          value={userDetails.country}
          size="small"
        />
      </FormGrid>
      
    </Grid>
  );
}
