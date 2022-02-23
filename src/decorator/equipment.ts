export interface Equipment {
  operation(): number;
}

export class HeadEquipment implements Equipment {
  private _missionClearBonus = 1;

  operation(): number {
    return this._missionClearBonus * 1.1;
  }
}
