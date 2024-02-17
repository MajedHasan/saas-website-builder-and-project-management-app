import { getAuthUserDetails } from "@/lib/queries";
import React from "react";

type Props = {
  id: string;
  type: "agency" | "subaccount";
};

const Sidebar = async ({ id, type }: Props) => {
  const user = await getAuthUserDetails();

  if (!user) return null;

  if (!user.Agency) return null;

  const details =
    type === "agency"
      ? user?.Agency
      : user.Agency.SubAccount.find((subaccount) => subaccount.id === id);

  const isWhileLabeledAgency = user.Agency.whiteLabel;

  if (!details) return;

  let sideBarLogo = user.Agency.agencyLogo || "/assets/plura-logo";

  return <div>Sidebar</div>;
};

export default Sidebar;
