import WPData from "@wattpad/data/wp-data";
import UserProfileUI from "@wattpad/ui/pages/user-profile"

export class UserProfilePage {

  userProfile(req, res) {
    const username = req.params.username;
    const profileData = WPData.getUserProfile(username);
    const { user } = WPData.useCurrentUser();

    return (
      <UserProfileUI user={user} profileData={profileData} />
    )
  }
}