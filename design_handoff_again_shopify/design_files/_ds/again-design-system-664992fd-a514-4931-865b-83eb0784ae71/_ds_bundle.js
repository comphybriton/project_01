/* @ds-bundle: {"format":3,"namespace":"AGAINDesignSystem_664992","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"Rating","sourcePath":"components/feedback/Rating.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"3c8216d3beb7","components/core/Badge.jsx":"4eb67b1c9931","components/core/Button.jsx":"c76852c3f2a6","components/core/Card.jsx":"a8e05b142d9c","components/core/IconButton.jsx":"fe6d28c044c3","components/core/Tag.jsx":"fe4824a51b45","components/feedback/Accordion.jsx":"89a5c1e07d62","components/feedback/Banner.jsx":"c902bef73c6a","components/feedback/Rating.jsx":"2d0591598419","components/forms/Checkbox.jsx":"841f4bda7ef5","components/forms/Input.jsx":"1c2bf693b4b3","components/forms/QuantityStepper.jsx":"67bbb0d988e4","components/forms/Switch.jsx":"ea1c7580ef4f","components/navigation/Tabs.jsx":"551655652bd9","ui_kits/website/CartDrawer.jsx":"39b4722d35c0","ui_kits/website/Footer.jsx":"ae26290897b6","ui_kits/website/Header.jsx":"d5f792293e52","ui_kits/website/HomeScreen.jsx":"e45aeeae06e9","ui_kits/website/ProductScreen.jsx":"6b369dcc473e","ui_kits/website/data.jsx":"11c5d677c9eb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AGAINDesignSystem_664992 = window.AGAINDesignSystem_664992 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AGAIN Avatar — round image or initials, mint fallback.
 */
function Avatar({
  src = null,
  name = '',
  size = 40,
  style = {},
  ...props
}) {
  const initials = name.split(' ').map(n => n[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      background: 'var(--again-fresh-blue)',
      color: 'var(--again-deep-teal)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-medium)',
      fontSize: size * 0.4,
      flexShrink: 0,
      ...style
    }
  }, props), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '·');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AGAIN Badge — small status / category label.
 * Tones: neutral, teal, mint, sand, blue, success, warning, danger.
 */
function Badge({
  children,
  tone = 'neutral',
  size = 'md',
  style = {},
  ...props
}) {
  const tones = {
    neutral: {
      background: 'var(--again-off-white)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-subtle)'
    },
    teal: {
      background: 'var(--accent)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--accent)'
    },
    mint: {
      background: 'var(--again-fresh-blue)',
      color: 'var(--text-on-mint)',
      border: '1px solid transparent'
    },
    sand: {
      background: 'var(--again-sand)',
      color: 'var(--again-deep-teal)',
      border: '1px solid transparent'
    },
    blue: {
      background: 'var(--info-soft)',
      color: '#3a5876',
      border: '1px solid transparent'
    },
    success: {
      background: 'var(--success-soft)',
      color: 'var(--success)',
      border: '1px solid transparent'
    },
    warning: {
      background: 'var(--warning-soft)',
      color: 'var(--warning)',
      border: '1px solid transparent'
    },
    danger: {
      background: 'var(--danger-soft)',
      color: 'var(--danger)',
      border: '1px solid transparent'
    }
  };
  const sizes = {
    sm: {
      padding: '2px 8px',
      fontSize: '0.6875rem'
    },
    md: {
      padding: '4px 11px',
      fontSize: '0.75rem'
    }
  };
  const t = tones[tone] || tones.neutral;
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '0.03em',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...t,
      ...s,
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AGAIN Button — primary brand action.
 * Variants: solid (Deep Teal), soft (mint), outline, ghost. Sizes: sm, md, lg.
 */
function Button({
  children,
  variant = 'solid',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...props
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '0.875rem',
      gap: '6px',
      minHeight: 36
    },
    md: {
      padding: '12px 22px',
      fontSize: '1rem',
      gap: '8px',
      minHeight: 44
    },
    lg: {
      padding: '15px 30px',
      fontSize: '1.0625rem',
      gap: '10px',
      minHeight: 52
    }
  };
  const variants = {
    solid: {
      background: 'var(--accent)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--accent)'
    },
    soft: {
      background: 'var(--accent-soft)',
      color: 'var(--text-on-mint)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--accent)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--accent)',
      border: '1px solid transparent'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.solid;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      minHeight: s.minHeight,
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-medium)',
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: '0.01em',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'solid') e.currentTarget.style.background = 'var(--accent-hover)';
      if (variant === 'soft') e.currentTarget.style.background = 'var(--teal-050)';
      if (variant === 'outline' || variant === 'ghost') e.currentTarget.style.background = 'var(--teal-050)';
    },
    onMouseLeave: e => {
      if (disabled) return;
      e.currentTarget.style.background = v.background;
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(1)';
    }
  }, props), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AGAIN Card — clean white surface with soft natural shadow and gentle radius.
 * Variants: raised (shadow), flat (border), mint, teal, sand.
 */
function Card({
  children,
  variant = 'raised',
  padding = 'var(--space-6)',
  interactive = false,
  style = {},
  ...props
}) {
  const variants = {
    raised: {
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-sm)',
      border: '1px solid var(--border-subtle)'
    },
    flat: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)'
    },
    mint: {
      background: 'var(--again-fresh-blue)',
      border: '1px solid transparent'
    },
    teal: {
      background: 'var(--again-deep-teal)',
      color: 'var(--text-on-dark)',
      border: '1px solid transparent'
    },
    sand: {
      background: 'var(--again-sand)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.raised;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-lg)',
      padding,
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : 'default',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!interactive) return;
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: e => {
      if (!interactive) return;
      e.currentTarget.style.boxShadow = v.boxShadow || 'none';
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, props), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AGAIN IconButton — round, icon-only button. Variants match Button.
 */
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  label,
  style = {},
  ...props
}) {
  const sizes = {
    sm: 34,
    md: 42,
    lg: 50
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    solid: {
      background: 'var(--accent)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--accent)'
    },
    soft: {
      background: 'var(--accent-soft)',
      color: 'var(--text-on-mint)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'var(--surface-card)',
      color: 'var(--accent)',
      border: '1px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      transition: 'background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (variant === 'ghost' || variant === 'outline') e.currentTarget.style.background = 'var(--teal-050)';
      if (variant === 'solid') e.currentTarget.style.background = 'var(--accent-hover)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = v.background;
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.94)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, props), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AGAIN Tag / Chip — selectable or removable pill, used for filters & ingredients.
 */
function Tag({
  children,
  selected = false,
  onRemove = null,
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 13px',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-medium)',
      fontSize: '0.8125rem',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      userSelect: 'none',
      transition: 'all var(--dur-fast) var(--ease-standard)',
      background: selected ? 'var(--accent)' : 'var(--surface-card)',
      color: selected ? 'var(--text-on-dark)' : 'var(--text-secondary)',
      border: selected ? '1px solid var(--accent)' : '1px solid var(--border-default)',
      ...style
    }
  }, props), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "Remove",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'inherit',
      fontSize: '1rem',
      lineHeight: 1,
      padding: 0,
      opacity: 0.7
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AGAIN Accordion — for FAQs and product details. items: [{ id, q, a }].
 * Single-open by default.
 */
function Accordion({
  items = [],
  defaultOpen = null,
  allowMultiple = false,
  style = {},
  ...props
}) {
  const [open, setOpen] = React.useState(defaultOpen != null ? [defaultOpen] : []);
  const toggle = id => {
    setOpen(cur => {
      if (cur.includes(id)) return cur.filter(x => x !== id);
      return allowMultiple ? [...cur, id] : [id];
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, props), items.map((it, idx) => {
    const isOpen = open.includes(it.id ?? idx);
    const key = it.id ?? idx;
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      style: {
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(key),
      "aria-expanded": isOpen,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '20px 4px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        fontSize: 16,
        color: 'var(--text-primary)'
      }
    }, it.q, /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        width: 22,
        height: 22,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
        transition: 'transform var(--dur-base) var(--ease-out)',
        color: 'var(--accent)',
        fontSize: 22,
        lineHeight: 1,
        fontWeight: 300
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? 320 : 0,
        overflow: 'hidden',
        transition: 'max-height var(--dur-slow) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 4px 20px',
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 15,
        lineHeight: 1.65,
        color: 'var(--text-secondary)',
        maxWidth: 620
      }
    }, it.a)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AGAIN Banner — inline contextual message (info / success / promo).
 */
function Banner({
  children,
  tone = 'mint',
  icon = null,
  onClose = null,
  style = {},
  ...props
}) {
  const tones = {
    mint: {
      background: 'var(--again-fresh-blue)',
      color: 'var(--again-deep-teal)'
    },
    sand: {
      background: 'var(--again-sand)',
      color: 'var(--again-deep-teal)'
    },
    teal: {
      background: 'var(--again-deep-teal)',
      color: 'var(--again-fresh-blue)'
    },
    neutral: {
      background: 'var(--again-off-white)',
      color: 'var(--text-primary)'
    }
  };
  const t = tones[tone] || tones.mint;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '13px 16px',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 14,
      ...t,
      ...style
    }
  }, props), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'inherit',
      fontSize: 18,
      lineHeight: 1,
      opacity: 0.7
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Rating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AGAIN Rating — star rating display (read-only or interactive).
 */
function Rating({
  value = 0,
  max = 5,
  size = 16,
  count = null,
  onChange = null,
  style = {},
  ...props
}) {
  const interactive = typeof onChange === 'function';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 2
    }
  }, Array.from({
    length: max
  }).map((_, i) => {
    const filled = value >= i + 1;
    const half = !filled && value > i;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      onClick: interactive ? () => onChange(i + 1) : undefined,
      style: {
        display: 'inline-flex',
        cursor: interactive ? 'pointer' : 'default',
        lineHeight: 0
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      "aria-hidden": true
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: `agstar-${i}`
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "50%",
      stopColor: "var(--accent)"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "50%",
      stopColor: "transparent"
    }))), /*#__PURE__*/React.createElement("path", {
      d: "M12 2.5l2.9 6 6.6.7-4.9 4.5 1.4 6.5L12 17.9 6 20.2l1.4-6.5L2.5 9.2l6.6-.7L12 2.5z",
      fill: filled ? 'var(--accent)' : half ? `url(#agstar-${i})` : 'transparent',
      stroke: "var(--accent)",
      strokeWidth: "1.4",
      strokeLinejoin: "round"
    })));
  })), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: size * 0.82,
      color: 'var(--text-secondary)'
    }
  }, value.toFixed(1), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.7
    }
  }, "(", count, ")")));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Rating.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AGAIN Checkbox — square, teal when checked.
 */
function Checkbox({
  checked = false,
  onChange = () => {},
  disabled = false,
  label = null,
  style = {},
  ...props
}) {
  const box = /*#__PURE__*/React.createElement("span", _extends({
    role: "checkbox",
    "aria-checked": checked,
    onClick: () => {
      if (!disabled) onChange(!checked);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-xs)',
      border: checked ? '1px solid var(--accent)' : '1px solid var(--border-strong)',
      background: checked ? 'var(--accent)' : 'var(--surface-card)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'all var(--dur-fast) var(--ease-standard)',
      flexShrink: 0
    }
  }, props), checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2L5 8.5L9.5 3.5",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
  if (!label) return box;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, box, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.9375rem',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AGAIN Input — text field with optional label & hint. Clean, soft border, teal focus.
 */
function Input({
  label = null,
  hint = null,
  error = null,
  iconLeft = null,
  size = 'md',
  style = {},
  id,
  ...props
}) {
  const [focused, setFocused] = React.useState(false);
  const sizes = {
    md: {
      padding: '11px 14px',
      fontSize: '1rem'
    },
    lg: {
      padding: '14px 16px',
      fontSize: '1.0625rem'
    }
  };
  const s = sizes[size] || sizes.md;
  const borderColor = error ? 'var(--danger)' : focused ? 'var(--accent)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-medium)',
      fontSize: '0.8125rem',
      color: 'var(--text-secondary)',
      letterSpacing: '0.01em'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: s.padding,
      boxShadow: focused ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--text-tertiary)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    onFocus: e => {
      setFocused(true);
      props.onFocus && props.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      props.onBlur && props.onBlur(e);
    }
  }, props, {
    style: {
      border: 'none',
      outline: 'none',
      background: 'transparent',
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-light)',
      fontSize: s.fontSize,
      color: 'var(--text-primary)'
    }
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.75rem',
      color: error ? 'var(--danger)' : 'var(--text-tertiary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AGAIN QuantityStepper — − / value / + pill for cart & PDP.
 */
function QuantityStepper({
  value = 1,
  min = 1,
  max = 99,
  onChange = () => {},
  size = 'md',
  style = {},
  ...props
}) {
  const sizes = {
    sm: {
      h: 32,
      w: 30,
      font: 13,
      num: 26
    },
    md: {
      h: 40,
      w: 38,
      font: 16,
      num: 34
    }
  };
  const s = sizes[size] || sizes.md;
  const set = n => onChange(Math.min(max, Math.max(min, n)));
  const btn = {
    width: s.w,
    height: s.h,
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: s.font,
    color: 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-card)',
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Decrease",
    style: {
      ...btn,
      opacity: value <= min ? 0.35 : 1
    },
    onClick: () => set(value - 1)
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: s.num,
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: s.font * 0.85
    }
  }, value), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Increase",
    style: {
      ...btn,
      opacity: value >= max ? 0.35 : 1
    },
    onClick: () => set(value + 1)
  }, "+"));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AGAIN Switch — toggle. Deep Teal track when on.
 */
function Switch({
  checked = false,
  onChange = () => {},
  disabled = false,
  label = null,
  style = {},
  ...props
}) {
  const toggle = () => {
    if (!disabled) onChange(!checked);
  };
  const control = /*#__PURE__*/React.createElement("span", _extends({
    role: "switch",
    "aria-checked": checked,
    onClick: toggle,
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      width: 44,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--accent)' : 'var(--border-strong)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-base) var(--ease-standard)',
      flexShrink: 0
    }
  }, props), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--again-white)',
      boxShadow: 'var(--shadow-xs)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  }));
  if (!label) return control;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, control, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.9375rem',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AGAIN Tabs — underline style, teal active indicator.
 * items: [{ id, label }]. Controlled via value/onChange.
 */
function Tabs({
  items = [],
  value = null,
  onChange = () => {},
  style = {},
  ...props
}) {
  const active = value ?? (items[0] && items[0].id);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, props), items.map(item => {
    const isActive = item.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      role: "tab",
      "aria-selected": isActive,
      onClick: () => onChange(item.id),
      style: {
        position: 'relative',
        border: 'none',
        background: 'transparent',
        padding: '0 0 14px',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--fw-medium)',
        fontSize: '0.9375rem',
        color: isActive ? 'var(--text-primary)' : 'var(--text-tertiary)',
        transition: 'color var(--dur-fast) var(--ease-standard)'
      }
    }, item.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        borderRadius: 'var(--radius-pill)',
        background: isActive ? 'var(--accent)' : 'transparent',
        transition: 'background var(--dur-fast) var(--ease-standard)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CartDrawer.jsx
try { (() => {
// AGAIN website — slide-in cart drawer.
const {
  Button: CButton
} = window.AGAINDesignSystem_664992;
function CartDrawer({
  open,
  items,
  onClose,
  onQty,
  onNav
}) {
  const ProductShot = window.ProductShot;
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      pointerEvents: open ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(8,41,37,0.32)',
      opacity: open ? 1 : 0,
      transition: 'opacity 260ms'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: 400,
      background: 'var(--surface-page)',
      boxShadow: 'var(--shadow-lg)',
      transform: open ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 320ms cubic-bezier(0.16,1,0.3,1)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '22px 24px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 500,
      fontSize: 20,
      margin: 0
    }
  }, "Your bag"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontSize: 24,
      color: 'var(--text-primary)',
      lineHeight: 1
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 24px'
    }
  }, items.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '60px 0',
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      color: 'var(--text-secondary)'
    }
  }, "Your bag is empty."), items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.id,
    style: {
      display: 'flex',
      gap: 14,
      padding: '18px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(ProductShot, {
    tone: i.tone,
    radius: "var(--radius-sm)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 14,
      marginBottom: 2
    }
  }, i.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 12.5,
      color: 'var(--text-secondary)',
      marginBottom: 8
    }
  }, i.size), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 0,
      border: '1px solid var(--border-default)',
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onQty(i.id, -1),
    style: qtyBtn
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 13
    }
  }, i.qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => onQty(i.id, 1),
    style: qtyBtn
  }, "+"))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 14
    }
  }, "$", i.price * i.qty)))), items.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, "Subtotal"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 500,
      fontSize: 18
    }
  }, "$", subtotal)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 12,
      color: 'var(--text-tertiary)',
      margin: '0 0 14px'
    }
  }, "Shipping & taxes calculated at checkout."), /*#__PURE__*/React.createElement(CButton, {
    variant: "solid",
    size: "lg",
    fullWidth: true,
    onClick: () => onNav('checkout')
  }, "Checkout"))));
}
const qtyBtn = {
  width: 28,
  height: 28,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  fontSize: 15,
  color: 'var(--text-primary)'
};
window.CartDrawer = CartDrawer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// AGAIN website — newsletter CTA band + footer.
const {
  Button: FButton,
  Input: FInput
} = window.AGAINDesignSystem_664992;
function NewsletterBand() {
  const ProductShot = window.ProductShot;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--again-fresh-blue)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: window.AG_GRAIN,
      backgroundSize: '160px 160px',
      opacity: 0.05,
      mixBlendMode: 'multiply'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1120,
      margin: '0 auto',
      padding: '72px 40px',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "again-eyebrow",
    style: {
      color: 'var(--accent)'
    }
  }, "Join the ritual"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      margin: '14px 0 14px',
      lineHeight: 1.08
    }
  }, "Better habits,", /*#__PURE__*/React.createElement("br", null), "in your inbox."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: '0 0 26px',
      maxWidth: 400
    }
  }, "Routine tips, new drops and a little encouragement to keep showing up. No noise \u2014 just the good stuff."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      display: 'flex',
      gap: 10,
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(FInput, {
    placeholder: "you@example.com",
    "aria-label": "Email"
  })), /*#__PURE__*/React.createElement(FButton, {
    variant: "solid",
    size: "md",
    type: "submit"
  }, "Subscribe")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 12,
      color: 'var(--text-secondary)',
      marginTop: 12,
      opacity: 0.8
    }
  }, "By subscribing you agree to our privacy policy. Unsubscribe anytime.")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 280
    }
  }, /*#__PURE__*/React.createElement(ProductShot, {
    tone: "var(--again-deep-teal)",
    white: true,
    radius: "var(--radius-xl)"
  }))));
}
function SiteFooter({
  onNav
}) {
  const cols = [{
    h: 'Shop',
    items: ['Cleansers', 'Serums', 'Moisturisers', 'Face oils', 'Bundles']
  }, {
    h: 'Learn',
    items: ['Our ingredients', 'Sustainability', 'The ritual', 'Journal']
  }, {
    h: 'Support',
    items: ['Contact', 'Shipping', 'Returns', 'FAQs']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--again-deep-teal)',
      color: 'var(--again-fresh-blue)',
      padding: '60px 40px 30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr repeat(3, 1fr)',
      gap: 40,
      maxWidth: 1120,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/again-white-logo.svg",
    alt: "AGAIN",
    style: {
      height: 27,
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.6,
      maxWidth: 260,
      margin: '0 0 20px',
      color: 'var(--again-fresh-blue)'
    }
  }, "Natural self-care, done right. Trusted routines and positive habits \u2014 better for you, better for the planet."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, ['M19 4H5a1 1 0 0 0-1 1v14l4-3h11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z', 'M12 2a10 10 0 0 0-3 19.5v-7H7v-2.5h2V10c0-2 1.2-3 3-3 .9 0 1.8.2 1.8.2v2H13c-1 0-1.3.6-1.3 1.3v1.5h2.2L13.5 14H12v7.5A10 10 0 0 0 12 2Z'].map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 34,
      height: 34,
      borderRadius: 999,
      border: '1px solid rgba(255,255,255,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: d
  })))))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#fff',
      margin: '0 0 16px'
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav && onNav('shop'),
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 14,
      color: 'var(--again-fresh-blue)',
      cursor: 'pointer',
      opacity: 0.85
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '44px auto 0',
      paddingTop: 22,
      borderTop: '1px solid rgba(255,255,255,0.16)',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 13,
      opacity: 0.8
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 AGAIN. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Natural self-care, done right.")));
}
window.NewsletterBand = NewsletterBand;
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// AGAIN website — announcement bar + sticky header/nav.
const {
  Button: AgButton,
  Badge: AgBadge
} = window.AGAINDesignSystem_664992;
function AnnounceBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--again-deep-teal)',
      color: 'var(--again-fresh-blue)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 12,
      padding: '9px 40px',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 11.5,
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Free carbon-neutral shipping over $50"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.45
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.7
    }
  }, "Natural ingredients that work, everyday")));
}
function SiteHeader({
  cartCount = 0,
  onNav,
  onCart,
  active = 'home'
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [{
    id: 'shop',
    label: 'Shop'
  }, {
    id: 'how',
    label: 'How it works'
  }, {
    id: 'ingredients',
    label: 'Ingredients'
  }, {
    id: 'about',
    label: 'Our Story'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 40px',
      background: scrolled ? 'rgba(245,245,245,0.82)' : 'var(--surface-page)',
      backdropFilter: scrolled ? 'saturate(140%) blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(140%) blur(12px)' : 'none',
      borderBottom: '1px solid ' + (scrolled ? 'var(--border-subtle)' : 'transparent'),
      transition: 'background 240ms, border-color 240ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 44
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/again-teal-logo.svg",
    alt: "AGAIN",
    onClick: () => onNav && onNav('home'),
    style: {
      height: 25,
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    onClick: () => onNav && onNav(l.id),
    style: {
      position: 'relative',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 14,
      color: active === l.id ? 'var(--text-primary)' : 'var(--text-secondary)',
      cursor: 'pointer',
      letterSpacing: '0.005em',
      paddingBottom: 2,
      borderBottom: active === l.id ? '1.5px solid var(--accent)' : '1.5px solid transparent'
    }
  }, l.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Search",
    style: iconBtn
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav && onNav('account'),
    "aria-label": "Account",
    style: iconBtn
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: onCart,
    "aria-label": "Cart",
    style: {
      ...iconBtn,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 7h12l-1 13H7L6 7Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 7a3 3 0 0 1 6 0"
  })), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -3,
      right: -3,
      minWidth: 17,
      height: 17,
      padding: '0 4px',
      borderRadius: 999,
      background: 'var(--accent)',
      color: '#fff',
      fontSize: 10.5,
      fontWeight: 600,
      fontFamily: 'var(--font-body)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, cartCount)))));
}
const iconBtn = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 38,
  height: 38,
  border: 'none',
  background: 'transparent',
  color: 'var(--text-primary)',
  cursor: 'pointer',
  borderRadius: 999
};
window.AnnounceBar = AnnounceBar;
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// AGAIN website — Home / landing (natural deodorant brand).
const {
  Button: HButton,
  Badge: HBadge,
  Card: HCard,
  Rating: HRating
} = window.AGAINDesignSystem_664992;
function HomeScreen({
  onNav,
  onAdd
}) {
  const products = window.AG_PRODUCTS;
  const ProductShot = window.ProductShot;
  const balm = products[0];
  const companion = products[1];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 40px 72px',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.02fr 0.98fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "again-eyebrow",
    style: {
      color: 'var(--accent)'
    }
  }, "Natural Self-Care, Done Right"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 66,
      lineHeight: 0.98,
      margin: '20px 0 22px',
      letterSpacing: '-0.025em'
    }
  }, "Fresh,", /*#__PURE__*/React.createElement("br", null), "on repeat."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 18.5,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      maxWidth: 452,
      margin: '0 0 30px'
    }
  }, "An aluminium-free deodorant balm that actually works. Natural ingredients, all-day fresh \u2014 no compromise on results."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(HButton, {
    variant: "solid",
    size: "lg",
    onClick: () => onNav('product', 'balm')
  }, "Shop the balm"), /*#__PURE__*/React.createElement(HButton, {
    variant: "outline",
    size: "lg",
    onClick: () => onNav('about')
  }, "How it works")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(HRating, {
    value: 4.8,
    size: 17
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, "4.8"), " from 2,600+ fresh humans"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 480
    }
  }, /*#__PURE__*/React.createElement(ProductShot, {
    tone: "var(--again-fresh-blue)",
    radius: "var(--radius-xl)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -24,
      bottom: 36,
      width: 234,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 14,
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(ProductShot, {
    tone: balm.tone,
    radius: "var(--radius-md)",
    symbol: true,
    grain: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 13.5,
      marginBottom: 3
    }
  }, balm.name), /*#__PURE__*/React.createElement(HRating, {
    value: balm.rating,
    size: 12
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 13.5,
      marginTop: 5,
      color: 'var(--text-primary)'
    }
  }, "$", balm.price))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -18,
      top: 30
    }
  }, /*#__PURE__*/React.createElement(HBadge, {
    tone: "teal",
    size: "md"
  }, "Aluminium-free"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--again-deep-teal)',
      padding: '20px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16
    }
  }, ['Aluminium-free', 'Works all day', 'Natural ingredients', 'Better for the planet'].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 500,
      fontSize: 17,
      color: '#fff',
      letterSpacing: '-0.01em'
    }
  }, t), i < 3 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--again-cool-blue)',
      opacity: 0.5,
      marginLeft: 4
    }
  }, "\xB7"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '76px 40px 64px',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "again-eyebrow"
  }, "Two products. That's it."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      margin: '12px 0 0'
    }
  }, "Meet the duo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(DuoCard, {
    p: balm,
    tone: "var(--again-fresh-blue)",
    onNav: onNav,
    onAdd: onAdd
  }), /*#__PURE__*/React.createElement(DuoCard, {
    p: companion,
    tone: "var(--again-sand)",
    onNav: onNav,
    onAdd: onAdd
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '8px 40px 76px',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--again-deep-teal)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: window.AG_GRAIN,
      backgroundSize: '160px 160px',
      opacity: 0.06,
      mixBlendMode: 'screen'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 0,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '52px 52px 52px 52px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--again-fresh-blue)'
    }
  }, "Zero waste, by design"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 500,
      fontSize: 34,
      color: '#fff',
      margin: '14px 0 16px',
      lineHeight: 1.1
    }
  }, "Every last bit. Nothing left behind."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--again-fresh-blue)',
      margin: '0 0 26px',
      maxWidth: 420
    }
  }, "The Companion is a little solid-brass key. Slot in the tube, wind as you go, and it squeezes out every last bit of balm \u2014 up to 10% more from every tube. Better for you, better for the planet."), /*#__PURE__*/React.createElement(HButton, {
    variant: "soft",
    size: "md",
    onClick: () => onNav('product', 'companion')
  }, "Add The Companion \xB7 $9")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 36,
      height: 320
    }
  }, /*#__PURE__*/React.createElement(ProductShot, {
    tone: "rgba(255,255,255,0.08)",
    white: true,
    radius: "var(--radius-lg)"
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--again-sand)',
      padding: '70px 40px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: window.AG_GRAIN,
      backgroundSize: '160px 160px',
      opacity: 0.05,
      mixBlendMode: 'multiply'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1040,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "again-eyebrow"
  }, "A habit worth keeping"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 38,
      margin: '12px 0 0'
    }
  }, "The three-second ritual")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 28
    }
  }, [{
    n: '01',
    t: 'Twist up',
    d: 'A small amount goes a long way. Warm it between fingers if you like.'
  }, {
    n: '02',
    t: 'Swipe on',
    d: 'Glides on clear, never sticky. Absorbs in seconds — get dressed and go.'
  }, {
    n: '03',
    t: 'Again tomorrow',
    d: 'Stay fresh all day. Build the habit, keep the routine. Repeat.'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 500,
      fontSize: 30,
      color: 'var(--accent)',
      marginBottom: 12
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 500,
      fontSize: 22,
      margin: '0 0 8px'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: 0,
      maxWidth: 280
    }
  }, s.d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '70px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1040,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 40
    }
  }, [{
    t: 'Aluminium-free',
    d: 'No aluminium, no baking soda, no nasties. Kind to skin and underarms.',
    icon: 'M12 2C7 8 7 13 12 22 17 13 17 8 12 2Z'
  }, {
    t: 'No compromise',
    d: 'Natural and effective. You shouldn\'t have to choose — so we made sure you don\'t.',
    icon: 'M20 6 9 17l-5-5'
  }, {
    t: 'Better for the planet',
    d: 'Recyclable tubes, carbon-neutral shipping, and a key that wastes nothing.',
    icon: 'M12 3a9 9 0 1 0 9 9c-4 1-7-1-7-5 0-2 .8-3.4-2-4Z'
  }].map(c => /*#__PURE__*/React.createElement("div", {
    key: c.t,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 999,
      background: 'var(--again-deep-teal)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--again-fresh-blue)",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: c.icon
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 500,
      fontSize: 20,
      margin: '0 0 8px'
    }
  }, c.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: '0 auto',
      maxWidth: 280
    }
  }, c.d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '84px 40px',
      background: 'var(--again-fresh-blue)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: window.AG_GRAIN,
      backgroundSize: '160px 160px',
      opacity: 0.05,
      mixBlendMode: 'multiply'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 840,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/again-teal-symbol.svg",
    alt: "",
    style: {
      width: 38,
      marginBottom: 24,
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 500,
      fontSize: 32,
      lineHeight: 1.25,
      letterSpacing: '-0.015em',
      color: 'var(--again-deep-teal)',
      margin: 0
    }
  }, "\"Switched from my old aluminium stick and never looked back. It just works \u2014 and I love that nothing goes to waste.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(HRating, {
    value: 5,
    size: 15
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, "\u2014 Maya R., verified review")))));
}
function DuoCard({
  p,
  tone,
  onNav,
  onAdd
}) {
  const ProductShot = window.ProductShot;
  const {
    Button,
    Rating
  } = window.AGAINDesignSystem_664992;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onNav('product', p.id),
    style: {
      height: 280,
      padding: 22,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(ProductShot, {
    tone: tone,
    radius: "var(--radius-lg)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 26px 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 500,
      fontSize: 24,
      margin: 0
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 500,
      fontSize: 22
    }
  }, "$", p.price)), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '8px 0 10px'
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    value: p.rating,
    size: 13,
    count: p.reviews
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: '0 0 18px'
    }
  }, p.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    size: "md",
    onClick: () => onAdd(p)
  }, "Add to bag"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "md",
    onClick: () => onNav('product', p.id)
  }, "Details \u2192"))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductScreen.jsx
try { (() => {
// AGAIN website — Product detail (PDP) for the balm and The Companion.
const {
  Button: PButton,
  Badge: PBadge,
  Tag: PTag,
  Rating: PRating
} = window.AGAINDesignSystem_664992;
function ProductScreen({
  productId,
  onNav,
  onAdd
}) {
  const products = window.AG_PRODUCTS;
  const ProductShot = window.ProductShot;
  const NS = window.AGAINDesignSystem_664992;
  const {
    Tabs,
    QuantityStepper,
    Accordion
  } = NS;
  const scents = window.AG_SCENTS;
  const p = products.find(x => x.id === productId) || products[0];
  const isBalm = p.kind === 'balm';
  const [tab, setTab] = React.useState('details');
  const [subscribe, setSubscribe] = React.useState(isBalm);
  const [qty, setQty] = React.useState(1);
  const [active, setActive] = React.useState(0);
  const [scent, setScent] = React.useState('eucalyptus');
  const thumbs = [p.tone, 'var(--again-off-white)', 'var(--teal-100)'];
  const price = subscribe ? p.price * 0.85 : p.price;
  const related = products.filter(x => x.id !== p.id);
  const ingredients = isBalm ? ['Shea Butter', 'Coconut Oil', 'Magnesium', 'Arrowroot', 'Candelilla Wax', 'Essential Oils'] : ['Solid Brass', 'Recyclable', 'Made to last'];
  const addNow = () => {
    for (let i = 0; i < qty; i++) onAdd(p);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '26px 40px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('home'),
    style: {
      color: 'var(--text-secondary)',
      cursor: 'pointer'
    }
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '0 8px'
    }
  }, "/"), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('shop'),
    style: {
      color: 'var(--text-secondary)',
      cursor: 'pointer'
    }
  }, "Shop"), /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '0 8px'
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, p.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 480
    }
  }, /*#__PURE__*/React.createElement(ProductShot, {
    tone: thumbs[active],
    radius: "var(--radius-xl)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 12
    }
  }, thumbs.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => setActive(i),
    style: {
      width: 78,
      height: 78,
      cursor: 'pointer',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      border: active === i ? '2px solid var(--accent)' : '2px solid transparent'
    }
  }, /*#__PURE__*/React.createElement(ProductShot, {
    tone: t,
    radius: "var(--radius-sm)",
    grain: false
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 14
    }
  }, isBalm ? [/*#__PURE__*/React.createElement(PBadge, {
    key: "1",
    tone: "mint"
  }, "Bestseller"), /*#__PURE__*/React.createElement(PBadge, {
    key: "2",
    tone: "neutral"
  }, "Aluminium-free"), /*#__PURE__*/React.createElement(PBadge, {
    key: "3",
    tone: "neutral"
  }, "Vegan")] : [/*#__PURE__*/React.createElement(PBadge, {
    key: "1",
    tone: "sand"
  }, "Zero waste"), /*#__PURE__*/React.createElement(PBadge, {
    key: "2",
    tone: "neutral"
  }, "Solid brass")]), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 40,
      margin: '0 0 12px'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(PRating, {
    value: p.rating,
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 13.5,
      color: 'var(--text-secondary)'
    }
  }, p.rating, " \xB7 ", p.reviews, " reviews")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: '0 0 24px',
      maxWidth: 460
    }
  }, p.blurb), isBalm && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginBottom: 10
    }
  }, "Scent \u2014 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, scents.find(s => s.id === scent).name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, scents.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    onClick: () => setScent(s.id),
    style: {
      flex: 1,
      textAlign: 'left',
      padding: '12px 14px',
      cursor: 'pointer',
      borderRadius: 'var(--radius-md)',
      background: scent === s.id ? 'var(--teal-050)' : 'var(--surface-card)',
      border: scent === s.id ? '1.5px solid var(--accent)' : '1.5px solid var(--border-default)',
      transition: 'all 150ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 13.5,
      color: 'var(--text-primary)'
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, s.note))))), isBalm && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(PurchaseOption, {
    selected: subscribe,
    onClick: () => setSubscribe(true),
    title: "Subscribe & save 15%",
    sub: "Delivered every 60 days \xB7 cancel anytime",
    price: `$${(p.price * 0.85).toFixed(0)}`
  }), /*#__PURE__*/React.createElement(PurchaseOption, {
    selected: !subscribe,
    onClick: () => setSubscribe(false),
    title: "One-time purchase",
    sub: "Single delivery",
    price: `$${p.price}`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    onChange: setQty,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(PButton, {
    variant: "solid",
    size: "lg",
    fullWidth: true,
    onClick: addNow
  }, "Add to bag \xB7 $", (price * qty).toFixed(0)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      marginBottom: 30
    }
  }, ['Carbon-neutral shipping', '30-day happiness guarantee'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--accent)",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, t)))), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: 'details',
      label: 'Details'
    }, {
      id: 'ingredients',
      label: isBalm ? 'Ingredients' : 'Materials'
    }, {
      id: 'how',
      label: 'How to use'
    }],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 18,
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 14.5,
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      maxWidth: 480,
      minHeight: 84
    }
  }, tab === 'details' && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, isBalm ? 'An aluminium-free balm that glides on clear and keeps you fresh all day. Lightweight, never sticky, and gentle enough for daily use — a routine you\'ll actually keep.' : 'A solid-brass key, made to last a lifetime. It winds up the tube and squeezes out every last bit of balm, so nothing is wasted. The perfect companion to your balm.'), tab === 'ingredients' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, ingredients.map(i => /*#__PURE__*/React.createElement(PTag, {
    key: i
  }, i))), tab === 'how' && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, isBalm ? 'Twist up a small amount, swipe onto clean underarms, and let it absorb for a few seconds. Use again, every day.' : 'Slot the end of the tube into the key and wind as you use the balm. It flattens the tube completely — every last bit, nothing left behind.')))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.2fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 30,
      margin: 0
    }
  }, "Good to know"), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: "a",
    items: isBalm ? [{
      id: 'a',
      q: 'Is it really aluminium-free?',
      a: 'Yes — no aluminium, no baking soda, no parabens. Just natural actives that neutralise odour and keep you fresh.'
    }, {
      id: 'b',
      q: 'Will it stain my clothes?',
      a: 'No. It glides on clear and absorbs in seconds, so you can get dressed straight away.'
    }, {
      id: 'c',
      q: 'How long does a tube last?',
      a: 'Around 8–10 weeks with daily use. Pair it with The Companion to get every last bit.'
    }] : [{
      id: 'a',
      q: 'How does The Companion work?',
      a: 'Slot the bottom of the tube into the slot and wind. It rolls the tube up tight, pushing every last bit of balm to the top.'
    }, {
      id: 'b',
      q: 'Will it last?',
      a: 'It\'s solid brass and built to last a lifetime — use it across tube after tube.'
    }, {
      id: 'c',
      q: 'Does it fit every tube?',
      a: 'It\'s sized for our balm tube and most standard squeeze tubes.'
    }]
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 40px 72px',
      background: 'var(--surface-page)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 30,
      margin: '0 0 26px'
    }
  }, isBalm ? 'Complete the ritual' : 'Pairs with'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 22
    }
  }, related.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    onClick: () => {
      onNav('product', r.id);
      window.scrollTo(0, 0);
    },
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'center',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 16,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 96,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(ProductShot, {
    tone: r.tone,
    radius: "var(--radius-md)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 500,
      fontSize: 19,
      marginBottom: 4
    }
  }, r.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 13.5,
      color: 'var(--text-secondary)',
      margin: '0 0 8px'
    }
  }, r.tagline), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 15
    }
  }, "$", r.price)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)'
    }
  }, "\u2192")))))));
}
function PurchaseOption({
  selected,
  onClick,
  title,
  sub,
  price
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 16px',
      cursor: 'pointer',
      borderRadius: 'var(--radius-md)',
      background: selected ? 'var(--teal-050)' : 'var(--surface-card)',
      border: selected ? '1.5px solid var(--accent)' : '1.5px solid var(--border-default)',
      transition: 'all 160ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      flexShrink: 0,
      border: selected ? '5px solid var(--accent)' : '2px solid var(--border-strong)',
      background: 'var(--surface-card)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 14.5,
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 12.5,
      color: 'var(--text-secondary)'
    }
  }, sub)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }, price));
}
window.ProductScreen = ProductScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.jsx
try { (() => {
// AGAIN website — shared data for the natural deodorant brand.
// Two real products: The Deodorant Balm, and The Companion (a winding key that
// squeezes every last bit of balm from the tube — zero waste).
// NOTE: AGAIN product/lifestyle photography was not provided. ProductShot renders a
// tactile, ceramic-feeling placeholder (tinted ground + soft highlight + grain + symbol).

const AG_GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";
const AG_SCENTS = [{
  id: 'unscented',
  name: 'Unscented',
  note: 'Pure & simple'
}, {
  id: 'eucalyptus',
  name: 'Eucalyptus + Mint',
  note: 'Cool & fresh'
}, {
  id: 'cedar',
  name: 'Cedar + Sage',
  note: 'Warm & grounding'
}];
const AG_PRODUCTS = [{
  id: 'balm',
  name: 'The Deodorant Balm',
  tagline: 'Natural deodorant that works',
  price: 16,
  tone: 'var(--again-fresh-blue)',
  size: '60g tube',
  rating: 4.8,
  reviews: 2140,
  kind: 'balm',
  blurb: 'An aluminium-free balm that keeps you fresh all day — natural ingredients, no compromise on results.'
}, {
  id: 'companion',
  name: 'The Companion',
  tagline: 'The key to every last bit',
  price: 9,
  tone: 'var(--again-sand)',
  size: 'Solid brass',
  rating: 4.9,
  reviews: 506,
  kind: 'tool',
  blurb: 'A little brass key that winds up the tube and squeezes out every last bit of balm — so nothing goes to waste.'
}];

// A bundle shown as a third "buy" option.
const AG_DUO = {
  id: 'duo',
  name: 'The Duo',
  tagline: 'Balm + Companion',
  price: 22,
  tone: 'var(--again-cool-blue)',
  size: 'Balm + key',
  rating: 4.9,
  reviews: 880
};
function ProductShot({
  tone = 'var(--again-fresh-blue)',
  white = false,
  radius = 'var(--radius-lg)',
  height = '100%',
  symbol = true,
  grain = true,
  highlight = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height,
      background: tone,
      borderRadius: radius,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, highlight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 90% at 30% 22%, rgba(255,255,255,0.5), rgba(255,255,255,0) 55%)'
    }
  }), symbol && /*#__PURE__*/React.createElement("img", {
    src: white ? '../../assets/logos/again-white-symbol.svg' : '../../assets/logos/again-teal-symbol.svg',
    alt: "",
    style: {
      position: 'relative',
      width: '32%',
      opacity: 0.16
    }
  }), grain && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: AG_GRAIN,
      backgroundSize: '140px 140px',
      opacity: 0.06,
      mixBlendMode: 'multiply',
      pointerEvents: 'none'
    }
  }));
}
window.AG_GRAIN = AG_GRAIN;
window.AG_SCENTS = AG_SCENTS;
window.AG_PRODUCTS = AG_PRODUCTS;
window.AG_DUO = AG_DUO;
window.ProductShot = ProductShot;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
