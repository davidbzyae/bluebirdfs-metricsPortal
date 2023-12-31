import { MenuElementProps } from "@/features/menus";
import { Popover } from "@mui/material";

export const ContextMenu = (props: MenuElementProps) => {
  const { isOpen, onOpen, onClose, anchorEl, ...other } = props;

  return (
    <Popover
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      anchorEl={anchorEl}
      open={isOpen}
      onClose={onClose}
      onClick={(e) => {
        if (e.target instanceof Element) {
          const isCloseOnClickOption =
            e.target.getAttribute("id") == "closeOnClickOption";

          if (isCloseOnClickOption) return onClose();
        }
      }}
      {...other}
      slotProps={{
        paper: {
          sx: {
            borderRadius: "12.5px",
          },
        },
      }}
    >
      {props.children}
    </Popover>
  );
};
