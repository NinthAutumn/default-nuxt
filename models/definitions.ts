export interface UserEntity {

}
enum Strategy {
  FACEBOOK = "facebook",
  GOOGLE = "google",
  LOCAL = "local",
  TWITTER = "twitter"
}

export interface AuthEntity {
  access_token: string;
  refresh_token: string;

  strategy?: Strategy;
}
