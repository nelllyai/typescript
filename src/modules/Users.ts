interface User {
  id: number;
  firstName: string;
  surname: string;
  age: number;
};

export abstract class Users<T extends User> {
  protected _userList: T[] = [];

  public add(user: T):void {
    this._userList.push(user);
  };

  public remove(id: number):boolean {
    const index:number = this._userList.findIndex(item => item.id === id);
    if (index === -1) return false;

    this._userList.splice(index, 1);
    return true;
  };

  public get(id: number): T | null {
    return this._userList.find(item => item.id === id) ?? null;
  }
};
