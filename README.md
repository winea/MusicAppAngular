# Music Website

This project is a Single Page Application of a Music Website with Spotify's Web API.

## Generate Application

#### npm install -g @angular/cli - Install the app generator CLI tool.

#### ng new musicApp --prefix=play - Generate an application, with custom prefix for selector.
choose route and css

#### cd musicApp - Change directory to the app.

#### ng serve -open - Start the compiler and open Chrome.


### Angular Material
https://material.angular.io/
#### ng add @angular/material
```
? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink        [ Preview: https://material.angular.io?theme=indigo-pink ]
? Set up global Angular Material typography styles? Yes 
? Set up browser animations for Angular Material? Yes
```

### Create component
#### ng g c home 

### Add Bootstrap
#### ng add @ng-bootstrap/ng-bootstrap

### Create service
#### ng g s spotifyServices

### Token
When the access token expires go to
#### https://developer.spotify.com/console/get-search-item/
press button -> get token

The new token must be put here, after the string Bearer:
```
private headers: HttpHeaders = new HttpHeaders({
    Authorization:
    ' Bearer BQCUi4ucgzVT8lCEUBWPOWKDCqCZMerhstD2AUm4oBrDEtXfvUKlgPs6Q6-jterqQnU9vhfy6psN9SpSM6GHS_8GXUfDhsv3dOXCOp-0tha3y6qfGnqzzJLID-mm8n27OovUPpfkMS1SVXTrKXb4ToaDQPgtm2V35gR-tjwkH2TEEWafb-qEfKX8z8SVoZtNCE4hu2zvlwjUU1YA4nfwr0YEjhzBIZGiINqvxgi27tQymlpYKPbIfwZ564E7znuWutZkayefbKQfU43eRDeE6mDRyFXRxBozOrY'
  });

```

### Where I learn to Debbug with Visual Studio Code
#### https://github.com/branflake2267/debugging-angular

## Screenshots:

### Navbar and Carousel

![webNav](https://github.com/winea/MusicAppAngular/blob/main/src/assets/img/website.png?raw=true);

### Search (with api integration):

![search](https://github.com/winea/MusicAppAngular/blob/main/src/assets/img/website2.png?raw=true);

### Search active:

![searchActive](https://github.com/winea/MusicAppAngular/blob/main/src/assets/img/website4.png?raw=true);

### Cards and Footer: 

![cards](https://github.com/winea/MusicAppAngular/blob/main/src/assets/img/website3.png?raw=true);

### Ipad responsive:

![ipad](https://github.com/winea/MusicAppAngular/blob/main/src/assets/img/ipad.png?raw=true);
