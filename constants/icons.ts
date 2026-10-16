import { IconType } from "react-icons";
import { BsFuelPump, BsFuelPumpDiesel, BsLightningCharge } from "react-icons/bs";
import { PiVan } from "react-icons/pi";
import { TbAutomaticGearbox, TbBus, TbCamper, TbCaravan, TbLeaf, TbManualGearbox } from "react-icons/tb";
import { CamperEngine, CamperForm, CamperTransmission } from "@/types/camper";

export const ENGINE_ICONS: Record<CamperEngine, IconType> = {
    diesel: BsFuelPumpDiesel,
    petrol: BsFuelPump,
    hybrid: TbLeaf,
    electric: BsLightningCharge,
};

export const TRANSMISSION_ICONS: Record<CamperTransmission, IconType> = {
    automatic: TbAutomaticGearbox,
    manual: TbManualGearbox,
};

export const FORM_ICONS: Record<CamperForm, IconType> = {
    alcove: TbCamper,
    panel_van: PiVan,
    integrated: TbBus,
    semi_integrated: TbCaravan,
};