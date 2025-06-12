import { jsxs, jsx } from "react/jsx-runtime";
import React, { useState } from "react";
import { T as TableService, B as Block, E as EnhancedTableToolbar, a as EnhancedTableHead } from "./EnhancedTableToolbar-a2f0c191.js";
import { Container } from "typedi";
import { B as BlockService } from "./BlockService-e48abac9.js";
import { u as useSnackbarHook, C as CustomSnackbar } from "./CustomSnackbar-a775827f.js";
import { ListItem, ListItemAvatar, Avatar, ListItemText, Paper, TableContainer, Table, TableBody, TableRow, TableCell, IconButton, TablePagination, Modal, Box, Typography, Stack } from "@mui/material";
import { Link, router } from "@inertiajs/react";
import Brightness1Icon from "@mui/icons-material/Brightness1.js";
import { C as CustomButton } from "./CustomButton-4b9588a9.js";
import { C as CommonService } from "../app.js";
import "@mui/utils";
import "@mui/material/styles/index.js";
import "@mui/icons-material/Delete.js";
import "@mui/icons-material/FilterList.js";
import "axios";
import "@mui/material/Alert/index.js";
import "@mui/icons-material/Add.js";
import "@mui/icons-material/Send.js";
import "@mui/icons-material/ChangeCircleOutlined.js";
import "@mui/icons-material/DeleteOutlineOutlined.js";
import "@mui/icons-material/SmartDisplayOutlined.js";
import "@mui/icons-material/AutoFixNormal.js";
import "@mui/icons-material/Reorder.js";
import "@mui/icons-material/ArrowBackIos.js";
import "react-i18next";
import "react-dom/client";
import "react-redux";
import "@reduxjs/toolkit";
import "reflect-metadata";
import "localstorage-slim";
import "crypto-js";
import "crypto-js/enc-utf8.js";
import "@mui/x-date-pickers";
import "@mui/x-date-pickers/AdapterDateFns/index.js";
import "i18next";
import "@syncfusion/ej2-base";
const modalStyle = "_modalStyle_1bxe6_1";
const styles = {
  modalStyle
};
const ListAvatar = ({
  primary,
  secondary,
  imageFile
}) => {
  return /* @__PURE__ */ jsxs(ListItem, { children: [
    /* @__PURE__ */ jsx(ListItemAvatar, { children: /* @__PURE__ */ jsx(Avatar, { src: imageFile }) }),
    /* @__PURE__ */ jsx(ListItemText, { primary, secondary })
  ] });
};
const headCells = [
  {
    id: "id",
    numeric: false,
    disablePadding: false,
    label: "Id"
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name"
  },
  {
    id: "parent",
    numeric: true,
    disablePadding: false,
    label: "Parent"
  },
  {
    id: "isActive",
    numeric: true,
    disablePadding: false,
    label: "Active"
  },
  {
    id: "edit",
    numeric: true,
    disablePadding: false,
    label: ""
  },
  {
    id: "delete",
    numeric: true,
    disablePadding: false,
    label: ""
  }
];
const BlockList = ({ category, blocks }) => {
  const tableService = Container.get(TableService);
  const blockService = Container.get(BlockService);
  const commonService = Container.get(CommonService);
  const [selectedBlocks, setSelectedBlocks] = useState(blocks);
  const [selectedBlock, setSelectedBlock] = useState(new Block({}));
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [selected, setSelected] = React.useState([]);
  const rows = React.useMemo(
    () => blockService.getBlockRows(selectedBlocks),
    [selectedBlocks]
  );
  const visibleRows = React.useMemo(
    () => tableService.stableSort(rows.map((row) => {
      return row;
    }), tableService.getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    ),
    [order, orderBy, page, rowsPerPage, rows]
  );
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => parseInt(n.id.toString()));
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const isSelected = (id) => selected.indexOf(id) !== -1;
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const { snackbar, setSnackbar, handleClose } = useSnackbarHook();
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal = (id) => {
    setSelectedBlock(selectedBlocks.find((cat) => cat.id === id) || new Block({}));
    setOpenModal(true);
  };
  const deleteBlock = (id) => {
    const block = selectedBlocks.find((cat) => cat.id === id) || new Block({});
    setOpenModal(false);
    blockService.deleteBlock(id).then((response) => {
      router.get("/admin/website/get-block/" + block.category);
    }).catch((error) => {
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Error Happened while deleting category!", severity: "error" })
      );
    });
  };
  const switchState = (id, currentState) => {
    const block = selectedBlocks.find((cat) => cat.id === id) || new Block({});
    const formData = new FormData();
    formData.append("isActive", String(!block.isActive));
    blockService.blockActivation(formData, id).then((response) => {
      router.get("/admin/website/get-block/" + block.category);
    }).catch((error) => {
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Error Happened while updating category status!", severity: "error" })
      );
    });
  };
  return /* @__PURE__ */ jsxs(Paper, { sx: { width: "100%", overflow: "hidden" }, children: [
    /* @__PURE__ */ jsx(EnhancedTableToolbar, { numSelected: selected.length, title: commonService.toTitleCase(category) }),
    /* @__PURE__ */ jsx(TableContainer, { component: Paper, sx: { maxHeight: 440 }, children: /* @__PURE__ */ jsxs(Table, { stickyHeader: true, size: "small", "aria-label": "collapsible table", children: [
      /* @__PURE__ */ jsx(
        EnhancedTableHead,
        {
          numSelected: selected.length,
          order,
          orderBy,
          onSelectAllClick: handleSelectAllClick,
          onRequestSort: handleRequestSort,
          rowCount: rows.length,
          headCells
        }
      ),
      /* @__PURE__ */ jsxs(TableBody, { children: [
        visibleRows.map((row, index) => {
          const isItemSelected = isSelected(parseInt(row.id.toString()));
          const labelId = `enhanced-table-checkbox-${index}`;
          return /* @__PURE__ */ jsxs(
            TableRow,
            {
              hover: true,
              role: "checkbox",
              "aria-checked": isItemSelected,
              tabIndex: -1,
              selected: isItemSelected,
              sx: { cursor: "pointer" },
              children: [
                /* @__PURE__ */ jsx(TableCell, { align: "left", children: index + 1 }),
                /* @__PURE__ */ jsx(
                  TableCell,
                  {
                    component: "th",
                    id: labelId,
                    scope: "row",
                    padding: "none",
                    children: /* @__PURE__ */ jsx(ListAvatar, { primary: row.name, secondary: row.createdAt, imageFile: row.image.toString() })
                  }
                ),
                /* @__PURE__ */ jsx(TableCell, { align: "right", children: row.parent }),
                /* @__PURE__ */ jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsx(IconButton, { onClick: () => switchState(parseInt(String(row.id)), row.isActvie), children: /* @__PURE__ */ jsx(Brightness1Icon, { color: row.isActive ? "activate" : "deactivate" }) }) }),
                /* @__PURE__ */ jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsx(Link, { href: `/admin/website/block/${row.id}`, children: /* @__PURE__ */ jsx(CustomButton, { task: "display", text: "" }) }) }),
                /* @__PURE__ */ jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsx(CustomButton, { task: "delete", text: "", onClick: () => handleOpenModal(parseInt(String(row.id))) }) })
              ]
            },
            row.id
          );
        }),
        emptyRows > 0 && /* @__PURE__ */ jsx(
          TableRow,
          {
            children: /* @__PURE__ */ jsx(TableCell, { colSpan: 6 })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      TablePagination,
      {
        rowsPerPageOptions: [5, 10, 25],
        component: "div",
        count: rows.length,
        rowsPerPage,
        page,
        onPageChange: handleChangePage,
        onRowsPerPageChange: handleChangeRowsPerPage
      }
    ),
    /* @__PURE__ */ jsx(
      Modal,
      {
        open: openModal,
        onClose: handleCloseModal,
        "aria-labelledby": "modal-modal-title",
        "aria-describedby": "modal-modal-description",
        children: /* @__PURE__ */ jsxs(Box, { className: styles.modalStyle, sx: {
          bgcolor: "background.paper",
          color: "text.primary",
          border: `2px solid`
        }, children: [
          /* @__PURE__ */ jsx(Typography, { id: "modal-modal-title", variant: "h6", component: "h2", children: "Confirm Deletion Message" }),
          /* @__PURE__ */ jsxs(Typography, { id: "modal-modal-description", sx: { mt: 2 }, children: [
            "Are you sure that you want to delete ",
            blockService.getBlockName(selectedBlock)
          ] }),
          /* @__PURE__ */ jsx(
            Stack,
            {
              direction: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              spacing: 2,
              className: "m-[8px]",
              children: /* @__PURE__ */ jsx(CustomButton, { task: "delete", text: "", onClick: () => deleteBlock(selectedBlock.id) })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      CustomSnackbar,
      {
        open: snackbar.open,
        message: snackbar.message,
        onClose: handleClose,
        severity: snackbar.severity
      }
    )
  ] });
};
export {
  BlockList as default
};
