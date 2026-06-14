export interface ILeaderGroup {
  id: number;
  image: string;
  fullname: string;
  position: string;
  direction: string;
  directiondesc: string;
  directionid: number;
  partner_image: string;
  text: string;
  brands: string[];
  partner_name: string;
  partner_position: string;
  partner_text: string;
  team_position: string;
  partner_team_position: string;
  users: [
    {
        image: string;
        fullname: string;
        position: string;
    }
  ];
}

