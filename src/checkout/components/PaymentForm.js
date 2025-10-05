import { Grid, OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FormLabel } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Components/context/AuthContext';
import { userApi } from '../../Components/misc/UserApi';



const FormGrid = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function PaymentForm({channels, setChannels, newChannel, setNewChannel}) {
  const Auth = useAuth()
  const user = Auth.getUser()
  const [isLoading, setIsLoading] = useState(true);

  const handleNewChannelChange = (event) => {
    const { name, value } = event.target;
    setNewChannel((prevChannel) => ({ ...prevChannel, [name]: value })); 
  };

  const handleChannelRemoval = (event) => {
    console.log("Removing channel ", event.target.id);
    userApi.removeChannel(user, event.target.id)
      .then(() => {
        console.log("removing channel from UI", event.target.id);
        setChannels((prevChannels) => prevChannels.filter(channel => channel.Channel_name !== event.target.id));
        console.log("Updated channels:", channels);
      })
      .catch((error) => {
        console.error("Error removing channel:", error);
      });
  }

  //' working on handle input change for dynamic form fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // setChannels((prevChannels) =>   
    //   prevChannels.map((channel, index) => {
    //     console.log(index, event.target.id)
    //     index === event.target.id ? { ...channel, [name]: value } : channel
    //     }
    //   )
    // );
    
    setChannels((prevChannels) => {
      const updatedChannels = [...prevChannels];
      updatedChannels[event.target.id] = {
        ...updatedChannels[event.target.id],
        [name]: value
      };
      return updatedChannels;
    });

    console.log(channels)
  }
  

  

  useEffect(() => { 
      const getYTChannels = async () => {
        try {
          const response = await userApi.fetchChannels(user);
  
          setChannels(response.data || []);
  
        } catch (error) {
          console.error("Error fetching user profile:", error)
        } finally {
          setIsLoading(false);
        }

      }
      getYTChannels()
    }, [])

    if (isLoading) {
      return <div>Loading...</div>;
    }

  return (
    <>
      {
        channels.map(
          (channel, index) => (
          <div key={index}>
            <Grid container spacing={1}>
              <FormGrid size={{ xs: 12, md: 6 }}>
                <FormLabel htmlFor="Channel_name" required>
                  Channel Name
                </FormLabel>
                <OutlinedInput
                  key={index}
                  id={index} 
                  name="Channel_name" 
                  type="text"
                  placeholder="Youtube Channel Name"
                  autoComplete="you tube channel name"
                  value={channel.Channel_name ? channel.Channel_name : ""}
                  required
                  size="small"
                />
              </FormGrid>
              <FormGrid size={{ xs: 12, md: 6 }}>
                <FormLabel htmlFor="subscriber_count" required>
                  Subscriber Count
                </FormLabel>
                <OutlinedInput
                onChange={handleInputChange}
                  key={index}
                  id={index}
                  name="subscriber_count"
                  type="text"
                  placeholder="subscriber Count"
                  autoComplete="subscriber_count"
                  required
                  value={channel.subscriber_count ? channel.subscriber_count : ""}
                  size="small"
                />
              </FormGrid>
              <FormGrid size={{ xs: 6 }}>
                <FormLabel htmlFor="videos_count" required>
                  Videos Count
                </FormLabel>
                <OutlinedInput
                onChange={handleInputChange}
                  key={index}
                  id={index}
                  name="videos_count" 
                  type="videos_count" 
                  placeholder="videos_count" 
                  autoComplete="videos_count" 
                  required
                  value={channel.videos_count ? channel.videos_count : ""}
                  size="videos_count" 
                />
              </FormGrid>
              <FormGrid size={{ xs: 12 }}>
                <FormLabel htmlFor="Channel_url" required>
                  Channel URL
                </FormLabel>
                <OutlinedInput
                onChange={handleInputChange}
                  key={index}
                  id={index}
                  name="Channel_url" 
                  type="Channel_url" 
                  placeholder="Channel_url" 
                  autoComplete="Channel_url" 
                  value={channel.Channel_url ? channel.Channel_url : ""}
                  required
                  size="small"
                />
              </FormGrid>
              <FormGrid size={{ xs: 12 }}>
                <FormLabel htmlFor="screenshots">Youtube channel Screenshots</FormLabel>
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
                <FormLabel htmlFor="screenshots2">Youtube channel Screenshots</FormLabel>
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

          <br />
          <button id={channel.Channel_name} type="button" onClick={handleChannelRemoval}>Remove Channel</button>
          </div>
          
        )
      )
    }

    <Grid container spacing={1}>
              <FormGrid size={{ xs: 12, md: 6 }}>
                <FormLabel htmlFor="Channel_name" required>
                  Channel Name
                </FormLabel>
                <OutlinedInput
                  onChange={handleNewChannelChange} 
                  name="Channel_name" 
                  type="text"
                  placeholder="Youtube Channel Name"
                  autoComplete="you tube channel name"
                  value={newChannel.Channel_name ? newChannel.Channel_name : ""}
                  required
                  size="small"
                />
              </FormGrid>
              <FormGrid size={{ xs: 12, md: 6 }}>
                <FormLabel htmlFor="subscriber_count" required>
                  Subscriber Count
                </FormLabel>
                <OutlinedInput
                onChange={handleNewChannelChange}
                  name="subscriber_count"
                  type="text"
                  placeholder="subscriber Count"
                  autoComplete="subscriber_count"
                  required
                  value={newChannel.subscriber_count ? newChannel.subscriber_count : ""}
                  size="small"
                />
              </FormGrid>
              <FormGrid size={{ xs: 6 }}>
                <FormLabel htmlFor="videos_count" required>
                  Videos Count
                </FormLabel>
                <OutlinedInput
                onChange={handleNewChannelChange}
                  name="videos_count" 
                  type="videos_count" 
                  placeholder="videos_count" 
                  autoComplete="videos_count" 
                  required
                  value={newChannel.videos_count ? newChannel.videos_count : ""}
                  size="videos_count" 
                />
              </FormGrid>
              <FormGrid size={{ xs: 12 }}>
                <FormLabel htmlFor="Channel_url" required>
                  Channel URL
                </FormLabel>
                <OutlinedInput
                onChange={handleNewChannelChange}
                  name="Channel_url" 
                  type="Channel_url" 
                  placeholder="Channel_url" 
                  autoComplete="Channel_url" 
                  value={newChannel.Channel_url ? newChannel.Channel_url : ""}
                  required
                  size="small"
                />
              </FormGrid>
              <FormGrid size={{ xs: 12 }}>
                <FormLabel htmlFor="screenshots">Youtube channel Screenshots</FormLabel>
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
                <FormLabel htmlFor="screenshots2">Youtube channel Screenshots</FormLabel>
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
    </>


  );
}
