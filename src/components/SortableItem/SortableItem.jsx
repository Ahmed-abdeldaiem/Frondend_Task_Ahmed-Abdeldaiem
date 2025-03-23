import React, { useEffect, useState } from "react";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { SortableChildItem } from "../SortableChildItem/SortableChildItem";
import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

export function SortableItem({
  id,
  title,
  visible,
  children,
  target,
  dragMeta,
  toggleEye,
}) {
  const [menuChildList, setMenuChildList] = useState([]);

  const [dragChildMeta, setDragChildMeta] = useState(null);

  const toggleEye2 = (id) => {
    setMenuChildList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, visible: !item.visible };
        } else if (item.children) {
          return {
            ...item,
            children: item.children.map((child) =>
              child.id === id ? { ...child, visible: !child.visible } : child
            ),
          };
        } else {
          return item;
        }
      })
    );
  };

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = menuChildList.findIndex((item) => item.id === active.id);
    const newIndex = menuChildList.findIndex((item) => item.id === over.id);

    setMenuChildList((items) => arrayMove(items, oldIndex, newIndex));
    setDragChildMeta({ id: active.id, from: oldIndex, to: newIndex });
  };

  useEffect(() => {
    if (children?.length > 0) {
      setMenuChildList(children);
    }
  }, [children]);

  useEffect(() => {
    if (dragMeta?.id === id) {
      console.log(`I was dragged from ${dragMeta.from} to ${dragMeta.to}`);
    }
  }, [dragMeta, id]);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    display: "flex",
    alignItems: "center",
    color: visible === false ? "gray" : "inherit",
  };

  return (
    <>
       <ListItemButton ref={setNodeRef} style={style} {...attributes}>
      {/* Drag handle */}
      <Box {...listeners} sx={{ cursor: "grab", mr: 1 }}>
        <DragIndicatorIcon fontSize="small" />
      </Box>

      <ListItemText primary={title} sx={{ ml: 1 }} />
      <EditOutlinedIcon sx={{ ml: "auto", mr: 1 }} />

      {/* Visibility toggle */}
      <Box
        onClick={(e) => {
          e.stopPropagation();
          toggleEye(id);
        }}
        sx={{ cursor: "pointer" }}
      >
        {visible === false ? (
          <VisibilityOffOutlinedIcon />
        ) : (
          <RemoveRedEyeOutlinedIcon />
        )}
      </Box>

    
    </ListItemButton>
    <ListItemButton>
  {/* children scorable */}
  <Box>
        {menuChildList?.length > 0 && (
          <Box sx={{ width: "100%" }}>
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={menuChildList.map((child) => child.id)}
                strategy={verticalListSortingStrategy}
              >
                <List component="div" disablePadding sx={{ pl: 0 }}>
                  {menuChildList.map((child) => (
                    <SortableChildItem
                      key={child.id}
                      id={child.id}
                      title={child.title}
                      visible={child.visible}
                      toggleEye={toggleEye2}
                      dragMeta={dragChildMeta}
                    />
                  ))}
                </List>
              </SortableContext>
            </DndContext>
          </Box>
        )}
      </Box>

    </ListItemButton>
    </>
 
  );
}
