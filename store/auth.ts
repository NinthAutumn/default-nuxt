import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { AuthEntity, UserEntity } from '../models/definitions';



@Module({
  name: 'auth',
  stateFactory: true,
  namespaced: true,
})
export default class Auth extends VuexModule {
  auth: AuthEntity = {
    access_token: "",
    refresh_token: ""
  };
  user: UserEntity = {
    id: 0,
    username: ""
  };
  get authMeta(): AuthEntity {
    return this.auth;
  }
  get isAuth(): boolean {
    return this.auth.access_token ? true : false;
  }

  @Mutation
  setAuth(auth: AuthEntity) {
    this.auth = auth;
  }






}
