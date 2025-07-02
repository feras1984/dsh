import { Service } from "typedi";
import { jsx, jsxs } from "react/jsx-runtime";
import { TableHead, TableRow, TableCell, TableSortLabel, Box, Toolbar, Typography, Tooltip, IconButton } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { alpha } from "@mui/material/styles/index.js";
import DeleteIcon from "@mui/icons-material/Delete.js";
import FilterListIcon from "@mui/icons-material/FilterList.js";
class Block {
  constructor({
    id = -1,
    categoryId = -1,
    parentId = -1,
    category = "",
    // name = '',
    // description = '',
    images = [],
    url = "",
    file = "",
    order = -1,
    isActive = false,
    startDate = "",
    endDate = "",
    createdAt = "",
    translations = [],
    files = [],
    classification = ""
  }) {
    this.id = id;
    this.categoryId = categoryId;
    this.parentId = parentId;
    this.category = category;
    this.images = images;
    this.file = file;
    this.url = url;
    this.order = order;
    this.isActive = isActive;
    this.startDate = startDate;
    this.endDate = endDate;
    this.createdAt = createdAt;
    this.translations = [...translations];
    this.files = [...files];
    this.classification = classification;
  }
}
Block.columns = [
  "id",
  "name",
  //name + image.
  "category",
  "order",
  "isActive",
  "details"
];
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let TableService = class {
  setInstance(t) {
    this.instance = t;
  }
  descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  getComparator(order, orderBy) {
    return order === "desc" ? (a, b) => this.descendingComparator(a, b, orderBy) : (a, b) => -this.descendingComparator(a, b, orderBy);
  }
  stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
};
TableService = __decorateClass([
  Service()
], TableService);
const TableService$1 = TableService;
const EnhancedTableHead = (props) => {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    if (onRequestSort) {
      onRequestSort(event, property);
    }
  };
  return /* @__PURE__ */ jsx(TableHead, { children: /* @__PURE__ */ jsx(TableRow, { children: props.headCells.map((headCell) => /* @__PURE__ */ jsx(
    TableCell,
    {
      align: headCell.numeric ? "right" : "left",
      padding: headCell.disablePadding ? "none" : "normal",
      sortDirection: orderBy === headCell.id ? order : false,
      children: /* @__PURE__ */ jsxs(
        TableSortLabel,
        {
          active: orderBy === headCell.id,
          direction: orderBy === headCell.id ? order : "asc",
          onClick: createSortHandler(headCell.id),
          children: [
            headCell.label,
            orderBy === headCell.id ? /* @__PURE__ */ jsx(Box, { component: "span", sx: visuallyHidden, children: order === "desc" ? "sorted descending" : "sorted ascending" }) : null
          ]
        }
      )
    },
    headCell.id
  )) }) });
};
const EnhancedTableToolbar = (props) => {
  const {
    numSelected,
    title = ""
  } = props;
  return /* @__PURE__ */ jsxs(
    Toolbar,
    {
      sx: {
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
        }
      },
      children: [
        numSelected > 0 ? /* @__PURE__ */ jsxs(
          Typography,
          {
            sx: { flex: "1 1 100%" },
            color: "inherit",
            variant: "subtitle1",
            component: "div",
            children: [
              numSelected,
              " selected"
            ]
          }
        ) : /* @__PURE__ */ jsx(
          Typography,
          {
            sx: { flex: "1 1 100%" },
            variant: "h6",
            id: "tableTitle",
            component: "div",
            children: title
          }
        ),
        numSelected > 0 ? /* @__PURE__ */ jsx(Tooltip, { title: "Delete", children: /* @__PURE__ */ jsx(IconButton, { children: /* @__PURE__ */ jsx(DeleteIcon, {}) }) }) : /* @__PURE__ */ jsx(Tooltip, { title: "Filter list", children: /* @__PURE__ */ jsx(IconButton, { children: /* @__PURE__ */ jsx(FilterListIcon, {}) }) })
      ]
    }
  );
};
export {
  Block as B,
  EnhancedTableToolbar as E,
  TableService$1 as T,
  EnhancedTableHead as a
};
