# Coupon Monarch App 
Yang Hu, Patrick Ntwari, Erin O'Neill, Michaela Reardon
EC500
Spring 2020

The application has been built to work in both iOS and Android. For project files, please look in the ios_version or android_expo_version branches for the respective iOS and Android applications.

# Semester Plan
For the semester, we plan on focusing on creating an app that simply provides users with company input deals and promotions in their local area.  
The minimum viable product is an app that allows a user to select a location and determine what local deals or promotions are available.  
# Architecture
Plan is to have an app interface (react native) that reads a database (local .json file) and uses Google Maps API to search the database.  

# User Stories
## User 1: Coupon Monarch
As a coupon monarch, I want to search for deals based on my location.
As a coupon monarch, I want suggestions based on my location. 
As a coupon monarch, I want to share deals with friends. 

## User 2: Promoter
As a corporation/business, I want to create a deal / coupon to be seen by app users.
As a Corporation/Business, I want to share a specific bar code or string to be shown at the point of sale to claim a deal.

# Process
This project leveraged ReactNative. In order to avoid errors using different environments, each team member had a local project environment and we made changes within our local projects and uploaded only the necessary files.

# Results
The application uses react native maps and react native navigation to display a map of coupons to the user. The user opens the application and it gives the user a list of companies that have coupons through CouponMonarch.

![Alt text](https://github.com/micher94/EC500_ScavengerHunt/blob/master/home.png?raw=true "Home Page")

The user can click on a company and it will take them to a map of all locations for that company that have an active Coupon. The map currently defaults to Boston as the initial region because all the test cases are within Boston. This can be updated later to incorporate pulling the user location.

![Alt text](https://github.com/micher94/EC500_ScavengerHunt/blob/master/markermap.png?raw=true "Home Page")

Initially all the markers will be green because none of the coupons have been used. The user can click on a marker and it will pop up with the Company, Coupon and Coupon ID for that location.

![Alt text](https://github.com/micher94/EC500_ScavengerHunt/blob/master/markermap_wcallout.png?raw=true "Home Page")

After a user decides which coupon they want to use. They click on coupon details which gives them a list of coupons, the user can find the coupon they want and click it to use the coupon. 

![Alt text](https://github.com/micher94/EC500_ScavengerHunt/blob/master/couponlist.png?raw=true "Home Page")

If the user clicks confirm, it marks the coupon as "used" and takes the user back to the home page. If the user clicks outside the dialog box, the user is taken back to the coupon list to keep browsing th coupons.

![Alt text](https://github.com/micher94/EC500_ScavengerHunt/blob/master/usecoupon.png?raw=true "Home Page")



# Next Steps
This application was part of a greater plan to make a "Scavenger Hunt" Application. This is the part of the application that would be used to map the "stops" on the scavenger hunt and to mark which locations are complete. The next steps in the development goal would be as follows:
1. Update local .json files to be a database and use fetch() to retrieve the data points
2. Include user login and user data with SSO identification
3. Create a system where companies can create their own scavenger hunts
4. Add QR codes or password box to dialog popup to verify the user stopped at the location
