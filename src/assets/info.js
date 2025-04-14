export default [
  {
    _id: 5,
    title: "Display",
    description:
      "The `display` property in Tailwind allows you to control the layout behavior of an element. It can make an element behave like block, inline, flex, grid, etc.",
    shortcut: "display",
    briefDescription:
      "The display utilities in Tailwind CSS are used to control how an element is displayed in the document layout. These utilities define the behavior of elements — whether they behave like a block, inline element, flex container, grid container, or are hidden entirely.",
    code: '<div class="block md:flex">Responsive layout</div>',
    extraInfo: [
      {
        title: "Grid",
        shortcut: "grid",
        description: "Use `grid` to enable CSS Grid layout.",
        code: `<div class="grid grid-cols-3 gap-4 p-4">
  <div class="bg-blue h-32 flex items-center justify-center">Box 1</div>
  <div class="bg-blue h-32 flex items-center justify-center">Box 2</div>
  <div class="bg-blue h-32 flex items-center justify-center">Box 3</div>
  <div class="bg-green h-32 flex items-center justify-center">Box 4</div>
  <div class="bg-green h-32 flex items-center justify-center">Box 5</div>
  <div class="bg-green h-32 flex items-center justify-center">Box 6</div>
</div>`,
      },
      {
        title: "Flex",
        shortcut: "flex",
        description:
          "Use `flex` to make the container a flexbox. Combine with `justify-*`, `items-*` for alignment.",
        code: '<div class="flex justify-center items-center">Flex container</div>',
      },
      {
        title: "Hidden",
        shortcut: "hidden",
        description: "Use `hidden` to completely hide an element.",
        code: '<div class="hidden">This will not show</div>',
      },
      {
        title: "Block",
        shortcut: "block",
        description:
          "The `block` class makes the element behave like a block-level element.",
        code: '<div class="block">Block element</div>',
      },
      {
        title: "Inline",
        shortcut: "inline",
        description:
          "Use `inline` to make the element behave like an inline element.",
        code: '<span class="inline">Inline element</span>',
      },
      {
        title: "Inline Block",
        shortcut: "inline-block",
        description:
          "`inline-block` allows the element to flow inline while preserving block styling like width and height.",
        code: '<div class="inline-block">Inline block</div>',
      },

      {
        title: "Inline Flex",
        shortcut: "inline-flex",
        description:
          "Same as `flex` but displayed inline with surrounding content.",
        code: '<div class="inline-flex">Inline flex</div>',
      },

      {
        title: "Inline Grid",
        shortcut: "inline-grid",
        description: "Like `grid` but displayed inline.",
        code: '<div class="inline-grid">Inline Grid</div>',
      },
    ],
  },
  {
    _id: 20,
    title: "Card",
    description:
      "Cards are flexible content containers used for displaying grouped content. Tailwind doesn't have built-in cards like Bootstrap, but you can create them easily using utilities for padding, border, shadow, and rounded corners.",
    shortcut: "card",
    briefDescription:
      "A card is a flexible and extensible content container in web design, often used to display information in a visually appealing and organized manner. Cards can contain images, text, buttons, or any other elements that are grouped together in a section. Tailwind CSS makes it easy to create cards with utility classes for layout, spacing, background, borders, shadows, and responsiveness.",
    code: `
  <div class="card card-hover w-[300px] m-3">
      <img src="https://images.pexels.com/photos/669502/pexels-photo-669502.jpeg?cs=srgb&dl=pexels-goumbik-669502.jpg&fm=jpg" alt="Card Image" class="card-image">
      <div class="card-body p-3">
        <h2 class="text-[20px] m-2">Card Title</h2>
        <p class="text-[14px] text-[#444]">This card has an image as well!</p>
      </div>
    </div>
    `,
    extraInfo: [],
  },
  {
    _id: 3,
    title: "Width",
    description: `Width controls how wide an element appears, and have max-w , min-w ,w-1, w-2,....,w-5 and
    also have arbitary values w-[value]`,
    shortcut: "w",
    briefDescription:
      "The width utility in Tailwind CSS is used to control the horizontal size of an element. It provides a wide range of predefined classes that cover fixed widths, fractional widths, percentage-based widths, screen-relative widths, minimum and maximum constraints, and fully custom values. These classes make it easy to build responsive layouts without writing custom CSS.",
    code: '<div class="w-screen">Content goes here</div>',
    extraInfo: [
      {
        title: "Fixed Width",
        shortcut: "w-[value]",
        description:
          "You can set a fixed width using square brackets. Example: `w-[250px]`.",
        code: '<div class="w-[250px]">Fixed width</div>',
      },

      {
        title: "Full Width",
        shortcut: "w-full",
        description:
          "Use `w-full` to make the element span the entire width of its parent.",
        code: '<div class="w-full">Full width</div>',
      },
      {
        title: "Viewport Width",
        shortcut: "w-[vw]",
        description:
          "Use `w-[25vw]` or other viewport-based values to size elements relative to the screen width.",
        code: '<div class="w-[25vw]">25% of viewport width</div>',
      },
      {
        title: "Auto Width",
        shortcut: "w-auto",
        description: "`w-auto` sets the width based on the content size.",
        code: '<div class="w-auto">Auto width</div>',
      },
      {
        title: "Min and Max Width",
        shortcut: "min-w / max-w",
        description:
          "You can control minimum or maximum width using `min-w-[value]` or `max-w-[value]`.",
        code: '<div class="min-w-[150px] max-w-[500px]">Width range</div>',
      },
    ],
  },
  {
    _id: 1,
    title: "Margin",
    description: "Margin is used to add space outside the element.",
    shortcut: "m",
    briefDescription:
      "The margin utilities in Tailwind CSS are used to control the outer spacing of elements. You can apply margin in all directions or individually to the top, right, bottom, or left sides. Tailwind provides predefined spacing values, auto margins, and negative margins for flexible layout control.",
    code: '<h1 class="m-[40px] m-2 mx-auto my-[30px]">Margin</h1>',
    extraInfo: [
      {
        title: "Margin Top",
        shortcut: "mt",
        description:
          "You can use margin on the top with `mt`. Example: `mt-5`.",
        code: '<h1 class="mt-5">Top margin</h1>',
      },
      {
        title: "Margin Bottom",
        shortcut: "mb",
        description: "Apply bottom margin using `mb`. Example: `mb-4`.",
        code: '<div class="mb-4">Bottom margin</div>',
      },
      {
        title: "Margin Left",
        shortcut: "ml",
        description: "Use `ml` for left margin. Example: `ml-6`.",
        code: '<p class="ml-6">Left margin</p>',
      },
      {
        title: "Margin Right",
        shortcut: "mr",
        description: "Use `mr` for right margin. Example: `mr-3`.",
        code: '<span class="mr-3">Right margin</span>',
      },
      {
        title: "Margin X (Left & Right)",
        shortcut: "mx",
        description:
          "`mx` applies margin to both left and right sides. Example: `mx-auto` or `mx-5`.",
        code: '<div class="mx-auto">Horizontally centered</div>',
      },
      {
        title: "Margin Y (Top & Bottom)",
        shortcut: "my",
        description:
          "`my` applies margin to both top and bottom. Example: `my-8`.",
        code: '<div class="my-8">Vertical spacing</div>',
      },
    ],
  },
  {
    _id: 2,
    title: "Padding",
    description: "Padding is used to add space inside the element.",
    shortcut: "p",
    briefDescription:
      "The padding utilities in Tailwind CSS are used to add space inside an element, between its content and border. Tailwind provides a wide range of spacing values, which can be applied to all sides or individually to the top, right, bottom, or left.",
    code: "<div class='p-[40px] p-2 px-5 py-[30px]'>Content goes here</div>",
    extraInfo: [
      {
        title: "Padding Top",
        shortcut: "pt",
        description:
          "You can apply top padding using `pt`, for example `pt-4`.",
        code: '<div class="pt-4">Top padding applied</div>',
      },
      {
        title: "Padding Bottom",
        shortcut: "pb",
        description:
          "Use `pb` to add padding at the bottom. For example, `pb-3`.",
        code: '<div class="pb-3">Bottom padding</div>',
      },
      {
        title: "Padding Left",
        shortcut: "pl",
        description:
          "Use `pl` to add padding to the left side. Example: `pl-2`.",
        code: '<div class="pl-2">Left padding</div>',
      },
      {
        title: "Padding Right",
        shortcut: "pr",
        description: "Use `pr` for right side padding. Example: `pr-6`.",
        code: '<div class="pr-6">Right padding</div>',
      },
      {
        title: "Padding X (Horizontal)",
        shortcut: "px",
        description:
          "Use `px` to apply padding on both left and right sides. For example, `px-5`.",
        code: '<div class="px-5">Horizontal padding applied</div>',
      },
      {
        title: "Padding Y (Vertical)",
        shortcut: "py",
        description:
          "Use `py` to apply padding on top and bottom. For example, `py-6`.",
        code: '<div class="py-6">Vertical padding applied</div>',
      },
    ],
  },

  {
    _id: 4,
    title: "Border",
    description:
      "Borders help define the edges of an element and can be customized in various ways.",
    shortcut: "border",
    briefDescription:
      "The border utilities in Tailwind CSS are used to add and style borders around elements. These utilities include options for setting the border width, color, style, radius (for rounded corners), and even individual side borders. Tailwind provides granular control, allowing developers to quickly apply consistent border styles without writing custom CSS.",
    code: '<div class="border border-gray-400 border-2 rounded-md">Box with border</div>',
    extraInfo: [
      {
        title: "Border Width",
        shortcut: "border / border-[value]",
        description:
          "Use `border` for a default border or `border-2`, `border-4`, etc., to increase thickness.",
        code: '<div class="border-4">Thick border</div>',
      },
      {
        title: "Border Color",
        shortcut: "border-{color}",
        description:
          "Tailwind supports border colors like `border-red-500`, `border-gray-400`, etc.",
        code: '<div class="border border-blue">Colored border</div>',
      },
      {
        title: "Border Radius",
        shortcut: "rounded",
        description:
          "Apply rounded corners with `rounded`, `rounded-md`, `rounded-lg`, or full round with `rounded-full`.",
        code: '<div class="border rounded-lg">Rounded border</div>',
      },
      {
        title: "Border Style",
        shortcut: "border-dashed / border-dotted",
        description:
          "Use styles like `border-dashed`, `border-dotted`, or `border-solid`.",
        code: '<div class="border border-dashed">Dashed border</div>',
      },

      {
        title: "Remove Border",
        shortcut: "border-0",
        description: "Remove all borders using `border-0`.",
        code: '<div class="border-0">No border</div>',
      },
    ],
  },

  {
    _id: 6,
    title: "Background",
    description:
      "The `background` properties in Tailwind allow you to set background colors, images, positioning, repeat, and more.",
    shortcut: "bg",
    briefDescription:
      "The background utilities in Tailwind CSS allow you to control the background appearance of elements. This includes background color, image, position, size, repeat behavior, attachment, blend mode, origin, clip, and gradient direction. These utilities provide a flexible way to style elements and enhance the visual aesthetics of your design.",
    code: '<div class="bg-blue p-8">Background color example</div>',
    extraInfo: [
      {
        title: "Background Color",
        shortcut: "bg-[color]",
        description:
          "Use `bg-[color]` to set the background color. Example: `bg-blue-500`, `bg-gray-200`.",
        code: '<div class="bg-[cyan] w-screen h-screen">Cyan background</div>',
      },
      {
        title: "Background Image",
        shortcut: "bg-[url(your_url)]",
        description:
          "You can set a background image using `bg-[url(your_link)]`. Example: `bg-cover` or `bg-center`.",
        code: `<div class="bg-cover bg-center bg-[url('https://tse3.mm.bing.net/th?id=OIP.Fe8Ph21Hbdb5TIYZmjCK2QHaFj&pid=Api&P=0&h=180')] h-screen w-screen" >Background image</div>`,
      },
      {
        title: "Background Size",
        shortcut: "bg-[size]",
        description:
          "Use `bg-cover` or `bg-contain` to control the size of the background image.",
        code: '<div class="bg-cover">Background size cover</div>',
      },
      {
        title: "Background Position",
        shortcut: "bg-[position]",
        description:
          "Control the position of the background image with `bg-center`, `bg-top`, `bg-bottom`, etc.",
        code: '<div class="bg-center">Centered background</div>',
      },
      {
        title: "Background Repeat",
        shortcut: "bg-repeat",
        description:
          "Control the repeat behavior of the background image using `bg-repeat`, `bg-no-repeat`.",
        code: '<div class="bg-no-repeat">No repeat background</div>',
      },
      {
        title: "Background Attachment",
        shortcut: "bg-fixed",
        description:
          "Control how the background image behaves when scrolling using `bg-fixed`, `bg-local`, or `bg-scroll`.",
        code: '<div class="bg-fixed h-screen w-screen">Fixed background</div>',
      },
    ],
  },
  {
    _id: 7,
    title: "Position",
    description:
      "The `position` properties in Tailwind are used to control the positioning of elements. You can use relative, absolute, fixed, sticky, and more.",
    shortcut: "pos",
    briefDescription:
      "The position utilities in Tailwind CSS are used to control how an element is positioned in the document. These utilities determine whether the element follows the normal document flow or is positioned relative to its nearest positioned ancestor or the viewport.",
    code: '<div class="relative top-4 left-4">Positioned element</div>',
    extraInfo: [
      {
        title: "Relative Position",
        shortcut: "relative",
        description:
          "Use `relative` to position an element relative to its normal position. Example: `relative top-4 left-4`.",
        code: '<div class="relative top-4 left-4">Relative position</div>',
      },
      {
        title: "Absolute Position",
        shortcut: "absolute",
        description:
          "Use `absolute` to position an element relative to its nearest positioned ancestor. Example: `absolute top-0 left-0`.",
        code: '<div class="absolute top-0 left-0">Absolute position</div>',
      },
      {
        title: "Fixed Position",
        shortcut: "fixed",
        description:
          "Use `fixed` to fix an element's position relative to the viewport. Example: `fixed top-0 left-0`.",
        code: '<div class="fixed top-0 left-0">Fixed position</div>',
      },
      {
        title: "Sticky Position",
        shortcut: "sticky",
        description:
          "Use `sticky` to make an element stick to its container when scrolling. Example: `sticky top-0`.",
        code: '<div class="sticky top-0">Sticky position</div>',
      },
      {
        title: "Z-Index",
        shortcut: "z-[index]",
        description:
          "Control the stacking order of elements using `z-[index]`. Example: `z-10`.",
        code: '<div class="z-10">Z-index control</div>',
      },
      {
        title: "Top Position",
        shortcut: "top-[value]",
        description:
          "Use `top-[value]` to control the vertical position of an element. Example: `top-0`, `top-4`.",
        code: '<div class="absolute top-4">Top position</div>',
      },
      {
        title: "Right Position",
        shortcut: "right-[value]",
        description:
          "Use `right-[value]` to control the horizontal position of an element. Example: `right-0`, `right-4`.",
        code: '<div class="absolute right-4">Right position</div>',
      },
      {
        title: "Bottom Position",
        shortcut: "bottom-[value]",
        description:
          "Use `bottom-[value]` to control the bottom positioning of an element. Example: `bottom-0`, `bottom-4`.",
        code: '<div class="absolute bottom-4">Bottom position</div>',
      },
      {
        title: "Left Position",
        shortcut: "left-[value]",
        description:
          "Use `left-[value]` to control the left position of an element. Example: `left-0`, `left-4`.",
        code: '<div class="absolute left-4">Left position</div>',
      },
    ],
  },
  {
    _id: 8,
    title: "Height",
    description:
      "The `height` properties in Tailwind are used to set the height of elements. You can use fixed values, percentage-based heights, viewport units, and more.",
    shortcut: "h",
    briefDescription:
      "The height (h) utilities in Tailwind CSS are used to set the vertical size of an element. These utilities let you control fixed, relative, or dynamic heights using predefined classes or custom values.",
    code: '<div class="h-screen">Content goes here</div>',
    extraInfo: [
      {
        title: "Fixed Height",
        shortcut: "h-[value]",
        description:
          "You can set a fixed height using square brackets, for example `h-[300px]`.",
        code: '<div class="h-[300px]">Fixed height</div>',
      },

      {
        title: "Full Height",
        shortcut: "h-full",
        description:
          "Use `h-full` to make the element span the entire height of its parent.",
        code: '<div class="h-full">Full height</div>',
      },
      {
        title: "Viewport Height",
        shortcut: "h-[vh]",
        description:
          "Use `h-[25vh]` or other viewport-based values to size elements relative to the screen height.",
        code: '<div class="h-[25vh]">25% of viewport height</div>',
      },
      {
        title: "Auto Height",
        shortcut: "h-auto",
        description: "`h-auto` sets the height based on the content size.",
        code: '<div class="h-auto">Auto height</div>',
      },
      {
        title: "Min and Max Height",
        shortcut: "min-h / max-h",
        description:
          "You can control the minimum or maximum height using `min-h-[value]` or `max-h-[value]`.",
        code: '<div class="min-h-[150px] max-h-[500px]">Height range</div>',
      },
    ],
  },
  {
    _id: 9,
    title: "Font",
    description:
      "The `font` properties in Tailwind are used to set the font styles of text elements. You can control properties like font family, size, weight, and more.",
    shortcut: "font",
    briefDescription:
      "The font utilities in Tailwind CSS provide powerful and expressive control over typography styling in your web projects. These utilities include settings for font size, font family, font weight, font smoothing, and even numerical styling. By using Tailwind's utility classes, you can easily apply consistent and responsive font styles without writing custom CSS.",
    code: '<div class="font-sans text-lg font-bold">Content goes here</div>',
    extraInfo: [
      {
        title: "Font Family",
        shortcut: "font-[family]",
        description:
          "You can set the font family using classes like `font-sans`, `font-serif`, or `font-mono`.",
        code: '<div class="font-fira">Fira Sans Font</div>',
      },
      {
        title: "Font Size",
        shortcut: "text-[size]",
        description:
          "Set the font size with classes like `text-sm`, `text-lg`, or specific values.",
        code: '<div class="text-lg">Extra Large Font</div>',
      },
      {
        title: "Font Weight",
        shortcut: "font-[weight]",
        description:
          "Adjust the font weight with classes like `font-thin`, `font-normal`, `font-semibold`, or `font-bold`.",
        code: '<div class="font-bold">Bold Font</div>',
      },
      {
        title: "Text Transform",
        shortcut: "uppercase / lowercase / capitalize",
        description:
          "You can transform text to uppercase, lowercase, or capitalize it using `uppercase`, `lowercase`, and `capitalize`.",
        code: '<div class="uppercase">Uppercase Text</div>',
      },
      {
        title: "Letter Spacing",
        shortcut: "tracking-[value]",
        description:
          "Control the letter spacing with classes like `tracking-tight`, `tracking-normal`, or `tracking-wide`.",
        code: '<div class="tracking-widest">Wide Letter Spacing</div>',
      },
      {
        title: "Line Height",
        shortcut: "leading-[value]",
        description:
          "Set the line height using classes like `leading-tight`,`leading-loose` or `leading-normal`.",
        code: '<div class="leading-loose">Relaxed Line Height</div>',
      },
    ],
  },
  {
    _id: 10,
    title: "Text Align",
    description:
      "The `text-align` properties in Tailwind CSS are used to control the horizontal alignment of text within an element. You can use left, right, center, or justify alignment.",
    shortcut: "text",
    briefDescription:
      "The text-align utilities in Tailwind CSS are used to control the horizontal alignment of text within an element. Tailwind makes it extremely simple to align text using intuitive utility classes that map directly to CSS text-align values. This is especially helpful in responsive design, where you may want text alignment to change across breakpoints.",
    code: '<div class="text-center">Content goes here</div>',
    extraInfo: [
      {
        title: "Left Alignment",
        shortcut: "text-left",
        description:
          "Use `text-left` to align text to the left of the container.",
        code: '<div class="text-left">Left Aligned Text</div>',
      },
      {
        title: "Center Alignment",
        shortcut: "text-center",
        description:
          "Use `text-center` to center the text horizontally within its container.",
        code: '<div class="text-center">Center Aligned Text</div>',
      },
      {
        title: "Right Alignment",
        shortcut: "text-right",
        description:
          "Use `text-right` to align text to the right of the container.",
        code: '<div class="text-right">Right Aligned Text</div>',
      },
      {
        title: "Justify Alignment",
        shortcut: "text-justify",
        description:
          "Use `text-justify` to stretch the text so that the text is justified and the lines are spread out to both ends.",
        code: '<div class="text-justify">Justified Text</div>',
      },
    ],
  },
  {
    _id: 11,
    title: "Flexbox",
    description:
      "The `flex` properties in Tailwind CSS are used to create flexible layouts. These classes help you arrange elements in rows or columns, distribute space, and control alignment and wrapping behavior.",
    shortcut: "flex",
    briefDescription:
      "Flexbox is a powerful layout tool that allows elements to be laid out in a flexible, responsive, and dynamic way. Tailwind CSS provides utility classes for working with Flexbox, making it incredibly easy to control layout and alignment without needing custom CSS.",
    code: '<div class="flex">Content goes here</div>',
    extraInfo: [
      {
        title: "Flex Direction",
        shortcut: "flex-row / flex-col",
        description:
          "Use `flex-row` to arrange items in a horizontal row, and `flex-col` for a vertical column.",
        code: '<div class="flex flex-row">Horizontal Flexbox</div>',
      },
      {
        title: "Flex Wrap",
        shortcut: "flex-wrap",
        description:
          "Use `flex-wrap` to allow flex items to wrap onto multiple lines. Without it, items will overflow.",
        code: '<div class="flex flex-wrap">Wrapped Flexbox</div>',
      },
      {
        title: "Justify Content",
        shortcut:
          "justify-start / justify-center / justify-end / justify-between / justify-around / justify-evenly",
        description:
          "Use `justify-*` classes to control the horizontal alignment of items in the flex container. Options include `start`, `center`, `end`, `between`, `around`, and `evenly`.",
        code: '<div class="flex justify-center">Centered Flex Items</div>',
      },
      {
        title: "Align Items",
        shortcut: "items-start / items-center / items-end / items-stretch",
        description:
          "Use `items-*` classes to control the vertical alignment of items within the flex container.",
        code: '<div class="flex items-center">Vertically Centered Flex Items</div>',
      },
      {
        title: "Align Self",
        shortcut: "self-start / self-center / self-end / self-stretch",
        description:
          "Use `self-*` classes to align individual items differently from the rest of the container's items.",
        code: '<div class="flex"><div class="self-center">Individually Centered Item</div></div>',
      },
      {
        title: "Flex Grow",
        shortcut: "flex-grow",
        description:
          "Use `flex-grow` to allow an item to grow and take up available space in the container.",
        code: '<div class="flex"><div class="flex-grow">Flex Grow Item</div></div>',
      },
    ],
  },
  {
    _id: 12,
    title: "Color",
    description:
      "The `color` properties in Tailwind CSS are used to set the text and background colors of elements. You can use predefined colors or customize your palette with hex, rgb, and other color formats.",
    shortcut: "text / bg",
    briefDescription:
      "Color properties in Tailwind CSS offer a highly flexible and customizable way to style elements with predefined utility classes for background colors, text colors, borders, and more. Tailwind’s color system is easy to use, and it includes a wide range of color utilities that allow you to adjust various aspects of your design, all without writing custom CSS.",
    code: '<div class="text-red">Text Color</div>',
    extraInfo: [
      {
        title: "Text Color",
        shortcut: "text-[color]",
        description:
          "Use `text-[color]` to set the color of the text. You can use predefined colors like `red-500` or custom colors with hex, RGB, or other formats.",
        code: '<div class="text-blue">Blue Text</div>',
      },

      {
        title: "Hover Text Color",
        shortcut: "hover:text-[color]",
        description:
          "Use `hover:text-[color]` to change the text color on hover.",
        code: '<div class="hover:text-[yellow]">Hover to Change Text Color</div>',
      },
      {
        title: "Hover Background Color",
        shortcut: "hover:bg-[color]",
        description:
          "Use `hover:bg-[color]` to change the background color on hover.",
        code: '<div class="hover:bg-[purple]">Hover to Change Background Color</div>',
      },
      {
        title: "Border Color",
        shortcut: "border-[color]",
        description:
          "Use `border-[color]` to set the border color of an element.",
        code: '<div class="border-2 border-red>Gray Border</div>',
      },
    ],
  },
  {
    _id: 13,
    title: "Box Shadow",
    description:
      "The `box-shadow` properties in Tailwind CSS are used to apply shadow effects to elements. You can use predefined shadow utilities or customize the shadow values.",
    shortcut: "shadow",
    briefDescription:
      "The box-shadow utility in Tailwind CSS allows you to apply shadow effects to elements. Shadows can add depth, emphasize content, and create visual hierarchy. Tailwind provides several predefined shadow classes that can be easily applied to any element, giving you control over the intensity and spread of the shadow.",
    code: '<div class="shadow-lg">Content with shadow</div>',
    extraInfo: [
      {
        title: "Default Shadow",
        shortcut: "shadow",
        description:
          "The default `shadow` class applies a small shadow to the element.",
        code: '<div class="shadow">Default Shadow</div>',
      },
      {
        title: "Small Shadow",
        shortcut: "shadow-sm",
        description: "Use `shadow-sm` for a smaller, softer shadow effect.",
        code: '<div class="shadow-sm">Small Shadow</div>',
      },
      {
        title: "Large Shadow",
        shortcut: "shadow-lg",
        description:
          "Use `shadow-lg` for a larger, more prominent shadow effect.",
        code: '<div class="shadow-lg">Large Shadow</div>',
      },
    ],
  },
  {
    _id: 14,
    title: "Opacity",
    description:
      "The `opacity` properties in Tailwind CSS are used to control the transparency of an element. You can use predefined opacity values ranging from 0 to 100 percent.",
    shortcut: "opacity",
    briefDescription:
      "The opacity property in Tailwind CSS allows you to control the transparency of an element. This is useful for creating various visual effects such as faded or semi-transparent backgrounds, images, and text. Tailwind provides utilities to adjust opacity levels, allowing you to achieve the desired transparency without writing custom CSS.",
    code: '<div class="opacity-50">Content with 50% opacity</div>',
    extraInfo: [
      {
        title: "Fully Opaque",
        shortcut: "opacity-100",
        description:
          "Use `opacity-100` to set the element to fully opaque (100% opacity).",
        code: '<div class="opacity-100">Fully Opaque</div>',
      },
      {
        title: "50% Opacity",
        shortcut: "opacity-50",
        description: "Use `opacity-50` to set the element's opacity to 50%.",
        code: '<div class="opacity-50">50% Opacity</div>',
      },
      {
        title: "25% Opacity",
        shortcut: "opacity-25",
        description: "Use `opacity-25` to set the element's opacity to 25%.",
        code: '<div class="opacity-25">25% Opacity</div>',
      },
      {
        title: "75% Opacity",
        shortcut: "opacity-75",
        description: "Use `opacity-75` to set the element's opacity to 75%.",
        code: '<div class="opacity-75">75% Opacity</div>',
      },
      {
        title: "0% Opacity",
        shortcut: "opacity-0",
        description:
          "Use `opacity-0` to make the element fully transparent (0% opacity).",
        code: '<div class="opacity-0">Fully Transparent</div>',
      },
    ],
  },
  {
    _id: 15,
    title: "Overflow",
    description:
      "The `overflow` properties in Tailwind CSS are used to control how content that overflows an element’s box is handled. You can use overflow hidden, scroll, or auto to manage the overflow behavior.",
    shortcut: "overflow",
    briefDescription:
      "The overflow property in CSS is used to control how content that overflows an element’s box is handled. It determines what happens when an element’s content exceeds its specified width or height. Tailwind CSS provides utilities for controlling overflow behavior, making it easy to manage this property directly in your markup.",
    code: '<div class="overflow-hidden">Content with hidden overflow</div>',
    extraInfo: [
      {
        title: "Hidden Overflow",
        shortcut: "overflow-hidden",
        description:
          "Use `overflow-hidden` to hide the content that overflows the element’s box.",
        code: '<div class="overflow-hidden">Content with hidden overflow</div>',
      },
      {
        title: "Scroll Overflow",
        shortcut: "overflow-scroll",
        description:
          "Use `overflow-scroll` to make the element scrollable when its content exceeds the element’s size.",
        code: '<div class="overflow-scroll">Content with scrollable overflow</div>',
      },
      {
        title: "Auto Overflow",
        shortcut: "overflow-auto",
        description:
          "Use `overflow-auto` to add scrollbars if the content overflows, otherwise it remains hidden.",
        code: '<div class="overflow-auto">Content with auto overflow</div>',
      },
      {
        title: "Overflow X",
        shortcut: "overflow-x-auto / overflow-x-hidden / overflow-x-scroll",
        description:
          "Use `overflow-x-{value}` to control overflow along the horizontal axis (x-axis).",
        code: '<div class="overflow-x-auto">Horizontal scroll if needed</div>',
      },
      {
        title: "Overflow Y",
        shortcut: "overflow-y-auto / overflow-y-hidden / overflow-y-scroll",
        description:
          "Use `overflow-y-{value}` to control overflow along the vertical axis (y-axis).",
        code: '<div class="overflow-y-auto">Vertical scroll if needed</div>',
      },
    ],
  },
  {
    _id: 16,
    title: "Z-Index",
    description:
      "The `z-index` property in Tailwind CSS controls the stacking order of elements that overlap. Higher values are stacked above lower values. You can use numeric values to set the z-index level.",
    shortcut: "z",
    briefDescription: `The z-index property in CSS is used to control the stacking order of elements on the page. It determines which elements appear in front or behind other elements. An element with a higher z-index will be displayed in front of elements with lower z-index values. If two elements have the same z-index, the one declared last in the HTML (or CSS) will be displayed in front.Tailwind CSS provides several utility classes to manage the z-index of elements, making it easy to manipulate the stacking context without writing custom CSS.
    `,
    code: '<div class="z-5">Content with z-index 5</div>',
    extraInfo: [
      {
        title: "Z-Index 0",
        shortcut: "z-0",
        description:
          "Use `z-0` to set the z-index to 0, positioning the element at the base level in the stacking order.",
        code: '<div class="z-0">Content with z-index 0</div>',
      },
      {
        title: "Z-Index 5",
        shortcut: "z-5",
        description:
          "Use `z-5` to set the z-index to 5, placing the element above elements with a z-index of 0.",
        code: '<div class="z-5">Content with z-index 5</div>',
      },
    ],
  },

  {
    _id: 19,
    title: "Visibility",
    description:
      "The `visibility` property in Tailwind CSS is used to control whether an element is visible or hidden. It allows you to hide elements while keeping their space in the layout, unlike `display: none` which completely removes the element from the document flow.",
    shortcut: "visibility",
    briefDescription:
      "The visibility property in CSS controls whether an element is visible or not, while still occupying space in the document layout. Unlike the display property, which can completely remove an element from the layout, visibility merely hides the element but retains its space in the layout, making it useful for creating temporary visibility toggles without affecting the layout flow. Visibility Utilities in Tailwind CSS. Tailwind CSS offers the visibility utility to manage the visibility of elements. This utility helps toggle the visibility of an element using visible and invisible states.",
    code: '<div class="visibility-visible">Visible Element</div>',
    extraInfo: [
      {
        title: "Visible",
        shortcut: "visible",
        description:
          "Use `visible` to make the element visible. This is the default value for most elements.",
        code: '<div class="visible">This element is visible</div>',
      },
      {
        title: "Hidden",
        shortcut: "hidden",
        description:
          "Use `hidden` to make the element hidden. The element will still take up space in the layout but will not be visible.",
        code: '<div class="hidden">This element is hidden</div>',
      },
    ],
  },

  {
    _id: 21,
    title: "Hover",
    description:
      "The `hover` utilities in Tailwind CSS allow you to apply styles to elements when they are hovered over. These are useful for interactivity like hover effects on buttons, links, cards, etc.",
    shortcut: "hover:",
    briefDescription:
      "In Tailwind CSS, the hover utility is a pseudo-class used to apply styles to an element when it is hovered over by a user. This utility is part of Tailwind's state variants, which enable you to change an element's appearance based on its interaction state, such as when a user hovers over the element.",
    code: '<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Hover Me</button>',
    extraInfo: [
      {
        title: "Hover Background",
        shortcut: "hover:bg-*",
        description:
          "Change background color on hover using classes like `hover:bg-red-500`.",
        code: '<div class="bg-gray-200 hover:bg-gray-400 p-4">Hover over me</div>',
      },
      {
        title: "Hover Text Color",
        shortcut: "hover:text-*",
        description: "Use `hover:text-*` to change text color when hovered.",
        code: '<p class="text-black hover:text-red-500">Hover to change text color</p>',
      },
      {
        title: "Hover Shadow",
        shortcut: "hover:shadow-lg",
        description: "Apply a larger shadow on hover for depth effect.",
        code: '<div class="shadow hover:shadow-lg p-4 rounded">Hover for shadow</div>',
      },
      {
        title: "Hover Scale",
        shortcut: "hover:scale-*",
        description:
          "Scale the element on hover for an interactive zoom effect.",
        code: '<div class="transform hover:scale-105 transition duration-300">Zoom on hover</div>',
      },
      {
        title: "Hover Border",
        shortcut: "hover:border-*",
        description: "Add or change border color when the element is hovered.",
        code: '<div class="border border-transparent hover:border-blue-500 p-4">Hover for border</div>',
      },
    ],
  },
  {
    _id: 22,
    title: "Letter Spacing",
    description:
      "The `letter-spacing` utilities in Tailwind CSS are used to control the space between characters in text. You can tighten or widen the spacing using predefined classes.",
    shortcut: "tracking",
    briefDescription:
      "Letter spacing refers to the amount of space between each character in a block of text. In typography, adjusting the letter spacing can significantly affect the readability, appearance, and tone of the text. In web development, letter spacing is commonly controlled using CSS properties, and Tailwind CSS provides utilities for this. Letter Spacing in Tailwind CSS: In Tailwind CSS, letter spacing is controlled using the tracking utility. You can adjust the space between characters in an element by applying classes like tracking-tight, tracking-normal, or tracking-wide. These classes set specific values for letter spacing.",
    code: '<div class="tracking-widest">Spaced Text</div>',
    extraInfo: [
      {
        title: "Tight Letter Spacing",
        shortcut: " tracking-tight",
        description:
          "Use `tracking-tighter` or `tracking-tight` to reduce space between letters.",
        code: '<div class="tracking-tight">Tight spacing</div>',
      },
      {
        title: "Normal Letter Spacing",
        shortcut: "tracking-normal",
        description:
          "Use `tracking-normal` to apply the default spacing between letters.",
        code: '<div class="tracking-normal">Normal spacing</div>',
      },
      {
        title: "Custom Letter Spacing",
        shortcut: "tracking-[value]",
        description:
          "Use `tracking-[value]` to apply the custom spacing between letters.",
        code: '<div class="tracking-[5px]">5px spacing</div>',
      },
      {
        title: "Wide Letter Spacing",
        shortcut: "tracking-widest",
        description:
          "Use these classes to increase space between characters gradually.",
        code: '<div class="tracking-widest">Wider spacing</div>',
      },
    ],
  },
  {
    _id: 23,
    title: "Line Height",
    description:
      "The `line-height` utilities in Tailwind CSS are used to control the vertical spacing between lines of text. These utilities help improve readability and design consistency.",
    shortcut: "leading",
    briefDescription:
      "Line height refers to the vertical space between lines of text in a block of content. It plays a crucial role in typography, as it affects the readability and overall appearance of text. Proper line height ensures that text is spaced comfortably, making it easier for readers to follow the flow of content. Why Line Height Matters: Readability: If the line height is too small, the lines of text can appear cramped and difficult to read. On the other hand, if the line height is too large, it can create unnecessary gaps between lines, making the text look disjointed. Visual Comfort: A well-adjusted line height helps make the content visually appealing and easier to read. It balances the text within its container and avoids overcrowding.Text Spacing: It can be used creatively to create a specific visual rhythm for text, especially in titles, headings, and paragraphs. Line Height in Tailwind CSS: In Tailwind CSS, the leading utility is used to control the line height. The leading property in CSS is essentially the same as line height, and Tailwind allows you to adjust it with predefined classes.",
    code: '<p class="leading-loose">This is a paragraph with loose line height.</p>',
    extraInfo: [
      {
        title: "None",
        shortcut: "leading-none",
        description:
          "Sets the line height to 1, with no extra space between lines.",
        code: '<p class="leading-none">Tight lines</p>',
      },
      {
        title: "Tight",
        shortcut: "leading-tight",
        description: "Sets the line height to 1.25 for tight spacing.",
        code: '<p class="leading-tight">Tightly spaced lines</p>',
      },

      {
        title: "Normal",
        shortcut: "leading-normal",
        description: "Applies the default line height (1.5).",
        code: '<p class="leading-normal">Normal line height</p>',
      },

      {
        title: "Loose",
        shortcut: "leading-loose",
        description: "Sets the line height to 2 for very open line spacing.",
        code: '<p class="leading-loose">Very open lines</p>',
      },
      {
        title: "Custom Line Height",
        shortcut: "leading-[value]",
        description:
          "You can specify a custom line height using square bracket notation.",
        code: '<p class="leading-[3rem]">Custom line height</p>',
      },
    ],
  },
  {
    _id: 24,
    title: "Cursor",
    description:
      "The `cursor` utilities in Tailwind CSS are used to specify the type of mouse cursor to display when hovering over an element.",
    shortcut: "cursor",
    briefDescription:
      "The cursor property in CSS is used to specify the type of cursor that should be displayed when the mouse pointer hovers over an element on a webpage. It allows designers to provide visual feedback to users about what type of interaction is possible or expected for a particular element.",
    code: '<button class="cursor-pointer">Hover me</button>',
    extraInfo: [
      {
        title: "Pointer Cursor",
        shortcut: "cursor-pointer",
        description:
          "Use `cursor-pointer` to change the cursor to a hand icon, typically used for buttons and links.",
        code: '<button class="cursor-pointer">Clickable Button</button>',
      },
      {
        title: "Default Cursor",
        shortcut: "cursor-default",
        description: "Use `cursor-default` to use the default arrow cursor.",
        code: '<div class="cursor-default">Default Cursor</div>',
      },
      {
        title: "Not Allowed Cursor",
        shortcut: "cursor-not-allowed",
        description:
          "Use `cursor-not-allowed` to indicate that an action is not permitted.",
        code: '<button class="cursor-not-allowed" disabled>Disabled</button>',
      },
      {
        title: "Wait Cursor",
        shortcut: "cursor-wait",
        description:
          "Use `cursor-wait` to show a loading or waiting indicator.",
        code: '<div class="cursor-wait">Loading...</div>',
      },
    ],
  },
  {
    _id: 25,
    title: "List Style",
    description:
      "The `list-style` utilities in Tailwind CSS are used to control the appearance of list item markers, including disc, decimal, and none.",
    shortcut: "list",
    briefDescription:
      "The list-style property in CSS is used to specify the appearance of list items, particularly for ordered (<ol>) and unordered (<ul>) lists. This property controls various aspects of list item markers (such as bullets or numbers) and their position relative to the list content. The list-style property is shorthand for several other individual list-related properties, which can be defined together for more concise styling. It helps in customizing the look and feel of list items, making them more visually appealing or aligned with the design style of the website.",
    code: '<ul class="list-disc pl-5"><li>Item 1</li><li>Item 2</li></ul>',
    extraInfo: [
      {
        title: "Disc",
        shortcut: "list-disc",
        description:
          "Use `list-disc` to display a filled circle as the list item marker.",
        code: '<ul class="list-disc pl-5"><li>Disc item</li></ul>',
      },
      {
        title: "Decimal",
        shortcut: "list-decimal",
        description:
          "Use `list-decimal` to display decimal numbers as the list item marker.",
        code: '<ol class="list-decimal pl-5"><li>First</li><li>Second</li></ol>',
      },
      {
        title: "None",
        shortcut: "list-none",
        description: "Use `list-none` to remove list item markers.",
        code: '<ul class="list-none"><li>No marker</li><li>No marker</li></ul>',
      },
    ],
  },
  {
    _id: 26,
    title: "Toaster (Toast Notification)",
    description:
      "While Tailwind CSS doesn't include a built-in toaster component, you can easily create a toast notification using utility classes or use a library like `react-hot-toast` for React apps.",
    shortcut: "toast",
    briefDescription:
      "A toaster (often referred to as a toast notification) is a small, non-intrusive message or alert that appears on a user's screen to provide feedback, usually in response to a specific action (like a form submission, error, or success). These notifications are often used to communicate information about processes or statuses without requiring user interaction or disrupting their workflow. The term 'toaster' comes from the fact that these messages often pop up briefly and then disappear automatically, much like a piece of toast popping out of a toaster.",
    code: `
  <div class="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
    Success! Your action was completed.
  </div>`,
    extraInfo: [
      {
        title: "Error Toaster",
        shortcut: "bg-red-500",
        description: "Use a red background for error notifications.",
        code: `
  <button class="py-[5px] px-[15px] bg-red text-white" onClick={()=>{toast({
  type:"error",
  message:"Error",
  duration:5000
  })}}>Error</button>`,
      },
      {
        title: "Warning Toast",
        shortcut: "bg-yellow-500",
        description: "Use a yellow background for warning messages.",
        code: `
  <div class="fixed top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded shadow-lg">
    Warning! Check your input.
  </div>`,
      },
      {
        title: "With Icons",
        shortcut: "flex items-center gap-2",
        description: "Add icons using flex layout to enhance the toast design.",
        code: `
  <div class="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow-lg flex items-center gap-2">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" /></svg>
    Info message!
  </div>`,
      },
      {
        title: "Auto Dismiss (JS Required)",
        shortcut: "setTimeout",
        description: "Use JavaScript to hide the toast after a few seconds.",
        code: `
  // HTML
  <div id="toast" class="fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded shadow-lg">
    This will disappear!
  </div>
  
  // JS
  setTimeout(() => {
    document.getElementById('toast').style.display = 'none';
  }, 3000);`,
      },
    ],
  },
];
