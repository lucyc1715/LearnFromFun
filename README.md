# Minions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.4.

## Features
Let's getting started our journey on Angular. 

``` mermaid
graph LR;
Minions-->Account;
Minions-->Playlist;
Minions-->Others;
Minions-->Bouns;
Account-->Login;
Account-->Register;
Account-->Profile;
Playlist-->songs-detatil;
Playlist-->My-playlist;
Playlist-->chart-play-times;
```
Here contains all of features that will implement into this project.

### Login Logout Register
- auth
- firebase
- from
- validation
- upload img

### Spotify Playlist
- integration Spotify open api
- search list
- save songs to my playlist

### Song Content
- song introduction
- feedback comment
- play

### My Playlist
- collection from search list

### Chart of Play Times
- search criteria area
- display songs play times

### Profile
- display img, name, github link
- generate QR code of github link or linkedIn link

### Setting
- receive notification
- with or without Internet access search or play songs
- i18n
