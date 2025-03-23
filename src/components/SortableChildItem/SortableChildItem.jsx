





import React, { useEffect } from 'react';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Box, ListItemButton, ListItemText } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import { PointerSensor, useSensor, useSensors } from '@dnd-kit/core';

export function SortableChildItem({ id, title, visible, children, target, dragMeta, toggleEye }) {



  useEffect(() => {
    if (dragMeta?.id === id) {
      console.log(`Child  was dragged from ${dragMeta.from} to ${dragMeta.to}`);
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
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
    marginBottom: '4px',
    paddingLeft: '8px',
    paddingRight: '8px',
    color: visible === false ? 'gray' : 'inherit',
  };
  

  return (
    <ListItemButton ref={setNodeRef} style={style} {...attributes}>
      {/* Drag handle */}
      <Box {...listeners} sx={{ cursor: 'grab', mr: 0 }}>
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
        {visible === false
          ? <VisibilityOffOutlinedIcon />
          : <RemoveRedEyeOutlinedIcon />}
      </Box>

 

    </ListItemButton>
  );
}
