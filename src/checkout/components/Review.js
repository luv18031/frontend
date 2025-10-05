import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useAuth } from '../../Components/context/AuthContext';
import { userApi } from '../../Components/misc/UserApi';


export default function Review() {

  const [userDetails, setUserDetails] = React.useState('');
  
  const [isLoading, setIsLoading] = useState(true);

  const Auth = useAuth()

  const user = Auth.getUser()

  
  useEffect(() => { 
    const fetchUserProfile = async () => {
      try {
        const response = await userApi.getUserProfile(user)
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

  if (isLoading) {
    return <div>Loading...</div>; // or a spinner, or any loading indicator
  }


  return (
    <Stack spacing={2}>
      <Stack
        direction="column"
        spacing={2}
        sx={{ my: 2 }}
      >
        <div>
          <Typography variant="subtitle2" gutterBottom>
            User Details
          </Typography>
          <Typography gutterBottom>{userDetails.name}</Typography>
          <Typography gutterBottom sx={{ color: 'text.secondary' }}>
            {userDetails.email} {userDetails.phoneNumber ? ` | ${userDetails.phoneNumber}` : ''}
          </Typography>
          <Typography gutterBottom sx={{ color: 'text.secondary' }}>
            {userDetails.address}, {userDetails.city}, {userDetails.state} {userDetails.pinCode}, {userDetails.country  ? ` | ${userDetails.country}` : ''}
          </Typography>
          <Typography gutterBottom sx={{ color: 'text.secondary' }}>
            Registered as: {userDetails.register_as}
          </Typography>
        </div>
      </Stack>
    </Stack>
  );
}
