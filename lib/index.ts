export default function h<TElement extends (props: any) => JSX.Element>(
  component: TElement,
  props: Omit<Parameters<TElement>[0], "children"> | null,
  ...children: (JSX.Element | null)[]
): JSX.Element;

export default function h<TElement extends keyof JSX.IntrinsicElements>(
  component: TElement,
  props: Omit<JSX.IntrinsicElements[TElement], "children"> | null,
  ...children: (JSX.Element | null)[]
): JSX.Element;

export default function h(
  component: keyof JSX.IntrinsicElements | ((props: any) => JSX.Element),
  props: Record<string | number | symbol, any> | null,
  ...children: (JSX.Element | null)[]
): JSX.Element {
  children = children.filter(Boolean);

  if (typeof component === "function") {
    if (props) props.children = children;
    return component(props);
  }

  let attributes = "";
  if (props) {
    for (const [name, value] of Object.entries(props)) {
      attributes += ` ${name}="${value}"`;
    }
  }

  return `<${component}${attributes}>${children.join("")}</${component}>`;
}

declare global {
  /**
   * The types within this namespace were generated using the help of
   * {@link https://github.com/ErikMedeiros/mozilla-elements-crawler | Mozilla Elements Crawler}
   */
  module JSX {
    interface Element extends String {}

    interface ElementChildrenAttribute {
      children: {};
    }

    interface IntrinsicElements {
      html: GlobalAttributes & HtmlTagAttributes;
      base: GlobalAttributes & BaseTagAttributes;
      head: GlobalAttributes & HeadTagAttributes;
      link: GlobalAttributes & LinkTagAttributes;
      meta: GlobalAttributes & MetaTagAttributes;
      style: GlobalAttributes & StyleTagAttributes;
      title: GlobalAttributes & TitleTagAttributes;
      body: GlobalAttributes & BodyTagAttributes;
      address: GlobalAttributes & AddressTagAttributes;
      article: GlobalAttributes & ArticleTagAttributes;
      aside: GlobalAttributes & AsideTagAttributes;
      footer: GlobalAttributes & FooterTagAttributes;
      header: GlobalAttributes & HeaderTagAttributes;
      h1: GlobalAttributes & H1TagAttributes;
      hgroup: GlobalAttributes & HgroupTagAttributes;
      main: GlobalAttributes & MainTagAttributes;
      nav: GlobalAttributes & NavTagAttributes;
      section: GlobalAttributes & SectionTagAttributes;
      search: GlobalAttributes & SearchTagAttributes;
      blockquote: GlobalAttributes & BlockquoteTagAttributes;
      dd: GlobalAttributes & DdTagAttributes;
      div: GlobalAttributes & DivTagAttributes;
      dl: GlobalAttributes & DlTagAttributes;
      dt: GlobalAttributes & DtTagAttributes;
      figcaption: GlobalAttributes & FigcaptionTagAttributes;
      figure: GlobalAttributes & FigureTagAttributes;
      hr: GlobalAttributes & HrTagAttributes;
      li: GlobalAttributes & LiTagAttributes;
      menu: GlobalAttributes & MenuTagAttributes;
      ol: GlobalAttributes & OlTagAttributes;
      p: GlobalAttributes & PTagAttributes;
      pre: GlobalAttributes & PreTagAttributes;
      ul: GlobalAttributes & UlTagAttributes;
      a: GlobalAttributes & ATagAttributes;
      abbr: GlobalAttributes & AbbrTagAttributes;
      b: GlobalAttributes & BTagAttributes;
      bdi: GlobalAttributes & BdiTagAttributes;
      bdo: GlobalAttributes & BdoTagAttributes;
      br: GlobalAttributes & BrTagAttributes;
      cite: GlobalAttributes & CiteTagAttributes;
      code: GlobalAttributes & CodeTagAttributes;
      data: GlobalAttributes & DataTagAttributes;
      dfn: GlobalAttributes & DfnTagAttributes;
      em: GlobalAttributes & EmTagAttributes;
      i: GlobalAttributes & ITagAttributes;
      kbd: GlobalAttributes & KbdTagAttributes;
      mark: GlobalAttributes & MarkTagAttributes;
      q: GlobalAttributes & QTagAttributes;
      rp: GlobalAttributes & RpTagAttributes;
      rt: GlobalAttributes & RtTagAttributes;
      ruby: GlobalAttributes & RubyTagAttributes;
      s: GlobalAttributes & STagAttributes;
      samp: GlobalAttributes & SampTagAttributes;
      small: GlobalAttributes & SmallTagAttributes;
      span: GlobalAttributes & SpanTagAttributes;
      strong: GlobalAttributes & StrongTagAttributes;
      sub: GlobalAttributes & SubTagAttributes;
      sup: GlobalAttributes & SupTagAttributes;
      time: GlobalAttributes & TimeTagAttributes;
      u: GlobalAttributes & UTagAttributes;
      var: GlobalAttributes & VarTagAttributes;
      wbr: GlobalAttributes & WbrTagAttributes;
      area: GlobalAttributes & AreaTagAttributes;
      audio: GlobalAttributes & AudioTagAttributes;
      img: GlobalAttributes & ImgTagAttributes;
      map: GlobalAttributes & MapTagAttributes;
      track: GlobalAttributes & TrackTagAttributes;
      video: GlobalAttributes & VideoTagAttributes;
      embed: GlobalAttributes & EmbedTagAttributes;
      iframe: GlobalAttributes & IframeTagAttributes;
      object: GlobalAttributes & ObjectTagAttributes;
      picture: GlobalAttributes & PictureTagAttributes;
      portal: GlobalAttributes & PortalTagAttributes;
      source: GlobalAttributes & SourceTagAttributes;
      svg: GlobalAttributes & SvgTagAttributes;
      math: GlobalAttributes & MathTagAttributes;
      canvas: GlobalAttributes & CanvasTagAttributes;
      noscript: GlobalAttributes & NoscriptTagAttributes;
      script: GlobalAttributes & ScriptTagAttributes;
      del: GlobalAttributes & DelTagAttributes;
      ins: GlobalAttributes & InsTagAttributes;
      caption: GlobalAttributes & CaptionTagAttributes;
      col: GlobalAttributes & ColTagAttributes;
      colgroup: GlobalAttributes & ColgroupTagAttributes;
      table: GlobalAttributes & TableTagAttributes;
      tbody: GlobalAttributes & TbodyTagAttributes;
      td: GlobalAttributes & TdTagAttributes;
      tfoot: GlobalAttributes & TfootTagAttributes;
      th: GlobalAttributes & ThTagAttributes;
      thead: GlobalAttributes & TheadTagAttributes;
      tr: GlobalAttributes & TrTagAttributes;
      button: GlobalAttributes & ButtonTagAttributes;
      datalist: GlobalAttributes & DatalistTagAttributes;
      fieldset: GlobalAttributes & FieldsetTagAttributes;
      form: GlobalAttributes & FormTagAttributes;
      input: GlobalAttributes & InputTagAttributes;
      label: GlobalAttributes & LabelTagAttributes;
      legend: GlobalAttributes & LegendTagAttributes;
      meter: GlobalAttributes & MeterTagAttributes;
      optgroup: GlobalAttributes & OptgroupTagAttributes;
      option: GlobalAttributes & OptionTagAttributes;
      output: GlobalAttributes & OutputTagAttributes;
      progress: GlobalAttributes & ProgressTagAttributes;
      select: GlobalAttributes & SelectTagAttributes;
      textarea: GlobalAttributes & TextareaTagAttributes;
      details: GlobalAttributes & DetailsTagAttributes;
      dialog: GlobalAttributes & DialogTagAttributes;
      summary: GlobalAttributes & SummaryTagAttributes;
      slot: GlobalAttributes & SlotTagAttributes;
      template: GlobalAttributes & TemplateTagAttributes;
      acronym: GlobalAttributes & AcronymTagAttributes;
      big: GlobalAttributes & BigTagAttributes;
      center: GlobalAttributes & CenterTagAttributes;
      content: GlobalAttributes & ContentTagAttributes;
      dir: GlobalAttributes & DirTagAttributes;
      font: GlobalAttributes & FontTagAttributes;
      frame: GlobalAttributes & FrameTagAttributes;
      frameset: GlobalAttributes & FramesetTagAttributes;
      image: GlobalAttributes & ImageTagAttributes;
      marquee: GlobalAttributes & MarqueeTagAttributes;
      menuitem: GlobalAttributes & MenuitemTagAttributes;
      nobr: GlobalAttributes & NobrTagAttributes;
      noembed: GlobalAttributes & NoembedTagAttributes;
      noframes: GlobalAttributes & NoframesTagAttributes;
      param: GlobalAttributes & ParamTagAttributes;
      plaintext: GlobalAttributes & PlaintextTagAttributes;
      rb: GlobalAttributes & RbTagAttributes;
      rtc: GlobalAttributes & RtcTagAttributes;
      shadow: GlobalAttributes & ShadowTagAttributes;
      strike: GlobalAttributes & StrikeTagAttributes;
      tt: GlobalAttributes & TtTagAttributes;
      xmp: GlobalAttributes & XmpTagAttributes;
    }

    interface GlobalAttributes {
      [key: `data-${string}`]: string;
      accesskey?: string;
      autocapitalize?: string;
      class?: string;
      contenteditable?: string;
      contextmenu?: string;
      dir?: string;
      draggable?: string;
      hidden?: string;
      id?: string;
      itemprop?: string;
      lang?: string;
      role?: string;
      slot?: string;
      spellcheck?: string;
      style?: string;
      tabindex?: string;
      title?: string;
      translate?: string;
      /** only needed for compiling the JSX */
      children?: JSX.Element | JSX.Element[];
    }

    /**
     * Represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.
     */
    interface HtmlTagAttributes {
      /** @deprecated */
      manifest?: string;
      /** @deprecated */
      version?: string;
      xmlns?: string;
    }

    /**
     * Specifies the base URL to use for all relative URLs in a document. There can be only one such element in a document.
     */
    interface BaseTagAttributes {
      href?: string;
      target?: "_self" | "_blank" | "_parent" | "_top";
    }

    /**
     * Contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets.
     */
    interface HeadTagAttributes {
      /** @deprecated */
      profile?: string;
    }

    /**
     * Specifies relationships between the current document and an external resource. This element is most commonly used to link to CSS but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.
     */
    interface LinkTagAttributes {
      as?: string;
      blocking?: "render";
      crossorigin?: "anonymous" | "use-credentials";
      disabled?: string;
      fetchpriority?: "high" | "low" | "auto";
      href?: string;
      hreflang?: string;
      imagesizes?: string;
      imagesrcset?: string;
      integrity?: string;
      media?: string;
      referrerpolicy?:
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "unsafe-url";
      rel?: string;
      sizes?: "any" | "<width in pixels>x<height in pixels>";
      title?: string;
      type?: string;
      /** @deprecated */
      methods?: string;
      /** @deprecated */
      target?: string;
      /** @deprecated */
      charset?: string;
      /** @deprecated */
      rev?: string;
    }

    /**
     * Represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> and <title>.
     */
    interface MetaTagAttributes {
      charset?: string;
      content?: string;
      "http-equiv"?:
        | "content-security-policy"
        | "content-type"
        | "default-style"
        | "x-ua-compatible"
        | "refresh";
      name?: string;
    }

    /**
     * Contains style information for a document or part of a document. It contains CSS, which is applied to the contents of the document containing this element.
     */
    interface StyleTagAttributes {
      blocking?: "render";
      media?: string;
      nonce?: string;
      title?: string;
      /** @deprecated */
      type?: string;
    }

    /**
     * Defines the document's title that is shown in a browser's title bar or a page's tab. It only contains text; tags within the element are ignored.
     */
    interface TitleTagAttributes {}

    /**
     * represents the content of an HTML document. There can be only one such element in a document.
     */
    interface BodyTagAttributes {
      /** @deprecated */
      alink?: string;
      /** @deprecated */
      background?: string;
      /** @deprecated */
      bgcolor?: string;
      /** @deprecated */
      bottommargin?: string;
      /** @deprecated */
      leftmargin?: string;
      /** @deprecated */
      link?: string;
      onafterprint?: string;
      onbeforeprint?: string;
      onbeforeunload?: string;
      onblur?: string;
      onerror?: string;
      onfocus?: string;
      onhashchange?: string;
      onlanguagechange?: string;
      onload?: string;
      onmessage?: string;
      onoffline?: string;
      ononline?: string;
      onpopstate?: string;
      onredo?: string;
      onresize?: string;
      onstorage?: string;
      onundo?: string;
      onunload?: string;
      /** @deprecated */
      rightmargin?: string;
      /** @deprecated */
      text?: string;
      /** @deprecated */
      topmargin?: string;
      /** @deprecated */
      vlink?: string;
    }

    /**
     * Indicates that the enclosed HTML provides contact information for a person or people, or for an organization.
     */
    interface AddressTagAttributes {}

    /**
     * Represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include a forum post, a magazine or newspaper article, a blog entry, a product card, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.
     */
    interface ArticleTagAttributes {}

    /**
     * Represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes.
     */
    interface AsideTagAttributes {}

    /**
     * Represents a footer for its nearest ancestor sectioning content or sectioning root element. A <footer> typically contains information about the author of the section, copyright data, or links to related documents.
     */
    interface FooterTagAttributes {}

    /**
     * Represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.
     */
    interface HeaderTagAttributes {}

    /**
     * Represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest.
     */
    interface H1TagAttributes {}

    /**
     * Represents a heading grouped with any secondary content, such as subheadings, an alternative title, or a tagline.
     */
    interface HgroupTagAttributes {}

    /**
     * Represents the dominant content of the body of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.
     */
    interface MainTagAttributes {}

    /**
     * Represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.
     */
    interface NavTagAttributes {}

    /**
     * Represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions.
     */
    interface SectionTagAttributes {}

    /**
     * Represents a part that contains a set of form controls or other content related to performing a search or filtering operation.
     */
    interface SearchTagAttributes {}

    /**
     * Indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation. A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the <cite> element.
     */
    interface BlockquoteTagAttributes {
      cite?: string;
    }

    /**
     * Provides the description, definition, or value for the preceding term (<dt>) in a description list (<dl>).
     */
    interface DdTagAttributes {
      /** @deprecated */
      nowrap?: string;
    }

    /**
     * The generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g., styling is directly applied to it, or some kind of layout model like flexbox is applied to its parent element).
     */
    interface DivTagAttributes {}

    /**
     * Represents a description list. The element encloses a list of groups of terms (specified using the <dt> element) and descriptions (provided by <dd> elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).
     */
    interface DlTagAttributes {}

    /**
     * Specifies a term in a description or definition list, and as such must be used inside a <dl> element. It is usually followed by a <dd> element; however, multiple <dt> elements in a row indicate several terms that are all defined by the immediate next <dd> element.
     */
    interface DtTagAttributes {}

    /**
     * Represents a caption or legend describing the rest of the contents of its parent <figure> element.
     */
    interface FigcaptionTagAttributes {}

    /**
     * Represents self-contained content, potentially with an optional caption, which is specified using the <figcaption> element. The figure, its caption, and its contents are referenced as a single unit.
     */
    interface FigureTagAttributes {}

    /**
     * Represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.
     */
    interface HrTagAttributes {
      /** @deprecated */
      align?: string;
      /** @deprecated */
      color?: string;
      /** @deprecated */
      noshade?: string;
      /** @deprecated */
      size?: string;
      /** @deprecated */
      width?: string;
    }

    /**
     * Represents an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.
     */
    interface LiTagAttributes {
      value?: string;
      /** @deprecated */
      type?: "a" | "A" | "i" | "I" | "1";
    }

    /**
     * A semantic alternative to <ul>, but treated by browsers (and exposed through the accessibility tree) as no different than <ul>. It represents an unordered list of items (which are represented by <li> elements).
     */
    interface MenuTagAttributes {}

    /**
     * Represents an ordered list of items — typically rendered as a numbered list.
     */
    interface OlTagAttributes {
      reversed?: string;
      start?: string;
      type?: "a" | "A" | "i" | "I" | "1";
    }

    /**
     * Represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.
     */
    interface PTagAttributes {}

    /**
     * Represents preformatted text which is to be presented exactly as written in the HTML file. The text is typically rendered using a non-proportional, or monospaced, font. Whitespace inside this element is displayed as written.
     */
    interface PreTagAttributes {
      /** @deprecated */
      cols?: string;
      /** @deprecated */
      width?: string;
      /** @deprecated */
      wrap?: string;
    }

    /**
     * Represents an unordered list of items, typically rendered as a bulleted list.
     */
    interface UlTagAttributes {
      /** @deprecated */
      compact?: string;
      /** @deprecated */
      type?: "circle" | "disc" | "square";
    }

    /**
     * Together with its href attribute, creates a hyperlink to web pages, files, email addresses, locations within the current page, or anything else a URL can address.
     */
    interface ATagAttributes {
      download?: "filename";
      href?: "tel:" | "mailto:" | "sms:";
      hreflang?: string;
      ping?: string;
      referrerpolicy?:
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";
      rel?: string;
      target?: "_self" | "_blank" | "_parent" | "_top";
      type?: string;
      /** @deprecated */
      charset?: string;
      /** @deprecated */
      coords?: string;
      /** @deprecated */
      name?: string;
      /** @deprecated */
      rev?: string;
      /** @deprecated */
      shape?: string;
    }

    /**
     * Represents an abbreviation or acronym.
     */
    interface AbbrTagAttributes {}

    /**
     * Used to draw the reader's attention to the element's contents, which are not otherwise granted special importance. This was formerly known as the Boldface element, and most browsers still draw the text in boldface. However, you should not use <b> for styling text or granting importance. If you wish to create boldface text, you should use the CSS font-weight property. If you wish to indicate an element is of special importance, you should use the strong element.
     */
    interface BTagAttributes {}

    /**
     * Tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text. It's particularly useful when a website dynamically inserts some text and doesn't know the directionality of the text being inserted.
     */
    interface BdiTagAttributes {}

    /**
     * Overrides the current directionality of text, so that the text within is rendered in a different direction.
     */
    interface BdoTagAttributes {
      dir?: "ltr" | "rtl";
    }

    /**
     * Produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.
     */
    interface BrTagAttributes {
      /** @deprecated */
      clear?: string;
    }

    /**
     * Used to mark up the title of a cited creative work. The reference may be in an abbreviated form according to context-appropriate conventions related to citation metadata.
     */
    interface CiteTagAttributes {}

    /**
     * Displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code. By default, the content text is displayed using the user agent's default monospace font.
     */
    interface CodeTagAttributes {}

    /**
     * Links a given piece of content with a machine-readable translation. If the content is time- or date-related, the<time> element must be used.
     */
    interface DataTagAttributes {
      value?: string;
    }

    /**
     * Used to indicate the term being defined within the context of a definition phrase or sentence. The ancestor <p> element, the <dt>/<dd> pairing, or the nearest section ancestor of the <dfn> element, is considered to be the definition of the term.
     */
    interface DfnTagAttributes {}

    /**
     * Marks text that has stress emphasis. The <em> element can be nested, with each nesting level indicating a greater degree of emphasis.
     */
    interface EmTagAttributes {}

    /**
     * Represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, and taxonomical designations, among others. Historically, these have been presented using italicized type, which is the original source of the <i> naming of this element.
     */
    interface ITagAttributes {}

    /**
     * Represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device. By convention, the user agent defaults to rendering the contents of a <kbd> element using its default monospace font, although this is not mandated by the HTML standard.
     */
    interface KbdTagAttributes {}

    /**
     * Represents text which is marked or highlighted for reference or notation purposes due to the marked passage's relevance in the enclosing context.
     */
    interface MarkTagAttributes {}

    /**
     * Indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. This element is intended for short quotations that don't require paragraph breaks; for long quotations use the <blockquote> element.
     */
    interface QTagAttributes {
      cite?: string;
    }

    /**
     * Used to provide fall-back parentheses for browsers that do not support the display of ruby annotations using the <ruby> element. One <rp> element should enclose each of the opening and closing parentheses that wrap the <rt> element that contains the annotation's text.
     */
    interface RpTagAttributes {}

    /**
     * Specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The <rt> element must always be contained within a <ruby> element.
     */
    interface RtTagAttributes {}

    /**
     * Represents small annotations that are rendered above, below, or next to base text, usually used for showing the pronunciation of East Asian characters. It can also be used for annotating other kinds of text, but this usage is less common.
     */
    interface RubyTagAttributes {}

    /**
     * Renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the del and ins elements, as appropriate.
     */
    interface STagAttributes {}

    /**
     * Used to enclose inline text which represents sample (or quoted) output from a computer program. Its contents are typically rendered using the browser's default monospaced font (such as Courier or Lucida Console).
     */
    interface SampTagAttributes {}

    /**
     * Represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font size smaller, such as from small to x-small.
     */
    interface SmallTagAttributes {}

    /**
     * A generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <span> is very much like a div element, but div is a block-level element whereas a <span> is an inline-level element.
     */
    interface SpanTagAttributes {}

    /**
     * Indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type.
     */
    interface StrongTagAttributes {}

    /**
     * Specifies inline text which should be displayed as subscript for solely typographical reasons. Subscripts are typically rendered with a lowered baseline using smaller text.
     */
    interface SubTagAttributes {}

    /**
     * Specifies inline text which is to be displayed as superscript for solely typographical reasons. Superscripts are usually rendered with a raised baseline using smaller text.
     */
    interface SupTagAttributes {}

    /**
     * Represents a specific period in time. It may include the datetime attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders.
     */
    interface TimeTagAttributes {
      datetime?: string;
    }

    /**
     * Represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation. This is rendered by default as a simple solid underline but may be altered using CSS.
     */
    interface UTagAttributes {}

    /**
     * Represents the name of a variable in a mathematical expression or a programming context. It's typically presented using an italicized version of the current typeface, although that behavior is browser-dependent.
     */
    interface VarTagAttributes {}

    /**
     * Represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location.
     */
    interface WbrTagAttributes {}

    /**
     * Defines an area inside an image map that has predefined clickable areas. An image map allows geometric areas on an image to be associated with hyperlink.
     */
    interface AreaTagAttributes {
      alt?: string;
      coords?: "rect" | "circle" | "poly";
      download?: string;
      href?: string;
      ping?: string;
      referrerpolicy?:
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";
      rel?: string;
      shape?: string;
      target?: "_self" | "_blank" | "_parent" | "_top";
    }

    /**
     * Used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the source element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.
     */
    interface AudioTagAttributes {
      autoplay?: string;
      controls?: string;
      controlslist?: string;
      crossorigin?: "anonymous" | "use-credentials";
      disableremoteplayback?: string;
      loop?: string;
      muted?: string;
      preload?: "none" | "metadata" | "auto" | "auto";
      src?: string;
    }

    /**
     * Embeds an image into the document.
     */
    interface ImgTagAttributes {
      alt?: string;
      crossorigin?: "anonymous" | "use-credentials";
      decoding?: "sync" | "async" | "auto";
      elementtiming?: string;
      fetchpriority?: "high" | "low" | "auto";
      height?: string;
      ismap?: string;
      loading?: "eager" | "lazy";
      referrerpolicy?:
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";
      sizes?: string;
      src?: string;
      srcset?: string;
      width?: string;
      usemap?: string;
      /** @deprecated */
      align?: "top" | "middle" | "bottom" | "left" | "right";
      /** @deprecated */
      border?: string;
      /** @deprecated */
      hspace?: string;
      /** @deprecated */
      longdesc?: string;
      /** @deprecated */
      name?: string;
      /** @deprecated */
      vspace?: string;
    }

    /**
     * Used with <area> elements to define an image map (a clickable link area).
     */
    interface MapTagAttributes {
      name?: string;
    }

    /**
     * Used as a child of the media elements, audio and video. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files)—Web Video Text Tracks.
     */
    interface TrackTagAttributes {
      default?: string;
      kind?: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
      label?: string;
      src?: string;
      srclang?: string;
    }

    /**
     * Embeds a media player which supports video playback into the document. You can also use <video> for audio content, but the audio element may provide a more appropriate user experience.
     */
    interface VideoTagAttributes {
      autoplay?: string;
      controls?: string;
      controlslist?: string;
      crossorigin?: "anonymous" | "use-credentials";
      disablepictureinpicture?: string;
      disableremoteplayback?: string;
      height?: string;
      loop?: string;
      muted?: string;
      playsinline?: string;
      poster?: string;
      preload?: "none" | "metadata" | "auto" | "auto";
      src?: string;
      width?: string;
    }

    /**
     * Embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in.
     */
    interface EmbedTagAttributes {
      height?: string;
      src?: string;
      type?: string;
      width?: string;
    }

    /**
     * Represents a nested browsing context, embedding another HTML page into the current one.
     */
    interface IframeTagAttributes {
      allow?: string;
      allowfullscreen?: string;
      allowpaymentrequest?: string;
      credentialless?: string;
      csp?: string;
      height?: string;
      loading?: "eager" | "lazy";
      name?: string;
      referrerpolicy?:
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";
      sandbox?:
        | "allow-downloads"
        | "allow-downloads-without-user-activation"
        | "allow-forms"
        | "allow-modals"
        | "allow-orientation-lock"
        | "allow-pointer-lock"
        | "allow-popups"
        | "allow-popups-to-escape-sandbox"
        | "allow-presentation"
        | "allow-same-origin"
        | "allow-scripts"
        | "allow-storage-access-by-user-activation"
        | "allow-top-navigation"
        | "allow-top-navigation-by-user-activation"
        | "allow-top-navigation-to-custom-protocols";
      src?: string;
      srcdoc?: string;
      width?: string;
      /** @deprecated */
      align?: string;
      /** @deprecated */
      frameborder?: string;
      /** @deprecated */
      longdesc?: string;
      /** @deprecated */
      marginheight?: string;
      /** @deprecated */
      marginwidth?: string;
      /** @deprecated */
      scrolling?: "auto" | "yes" | "no";
    }

    /**
     * Represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.
     */
    interface ObjectTagAttributes {
      /** @deprecated */
      archive?: string;
      /** @deprecated */
      border?: string;
      /** @deprecated */
      classid?: string;
      /** @deprecated */
      codebase?: string;
      /** @deprecated */
      codetype?: string;
      data?: string;
      /** @deprecated */
      declare?: string;
      form?: string;
      height?: string;
      name?: string;
      /** @deprecated */
      standby?: string;
      type?: string;
      usemap?: string;
      width?: string;
    }

    /**
     * Contains zero or more <source> elements and one <img> element to offer alternative versions of an image for different display/device scenarios.
     */
    interface PictureTagAttributes {}

    /**
     * Enables the embedding of another HTML page into the current one to enable smoother navigation into new pages.
     */
    interface PortalTagAttributes {
      referrerpolicy?: string;
      src?: string;
    }

    /**
     * Specifies multiple media resources for the picture, the audio element, or the video element. It is a void element, meaning that it has no content and does not have a closing tag. It is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for image file formats and media file formats.
     */
    interface SourceTagAttributes {
      type?: string;
      src?: string;
      srcset?: "w" | "x";
      sizes?: string;
      media?: string;
      height?: string;
      width?: string;
    }

    /**
     * Container defining a new coordinate system and viewport. It is used as the outermost element of SVG documents, but it can also be used to embed an SVG fragment inside an SVG or HTML document.
     */
    interface SvgTagAttributes {
      /** @deprecated */
      baseProfile?: string;
      /** @deprecated */
      contentScriptType?: string;
      /** @deprecated */
      contentStyleType?: string;
      height?: string;
      preserveAspectRatio?: string;
      /** @deprecated */
      version?: string;
      viewBox?: string;
      width?: string;
      x?: string;
      y?: string;
    }

    /**
     * The top-level element in MathML. Every valid MathML instance must be wrapped in it. In addition, you must not nest a second <math> element in another, but you can have an arbitrary number of other child elements in it.
     */
    interface MathTagAttributes {}

    /**
     * Container element to use with either the canvas scripting API or the WebGL API to draw graphics and animations.
     */
    interface CanvasTagAttributes {
      height?: string;
      /** @deprecated */
      "moz-opaque"?: string;
      width?: string;
    }

    /**
     * Defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.
     */
    interface NoscriptTagAttributes {}

    /**
     * Used to embed executable code or data; this is typically used to embed or refer to JavaScript code. The <script> element can also be used with other languages, such as WebGL's GLSL shader programming language and JSON.
     */
    interface ScriptTagAttributes {
      async?: string;
      blocking?: "render";
      crossorigin?: string;
      defer?: string;
      fetchpriority?: "high" | "low" | "auto";
      integrity?: string;
      nomodule?: string;
      nonce?: string;
      referrerpolicy?:
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";
      src?: string;
      type?: "importmap" | "module" | "speculationrules";
      /** @deprecated */
      charset?: string;
      /** @deprecated */
      language?: string;
    }

    /**
     * Represents a range of text that has been deleted from a document. This can be used when rendering "track changes" or source code diff information, for example. The <ins> element can be used for the opposite purpose: to indicate text that has been added to the document.
     */
    interface DelTagAttributes {
      cite?: string;
      datetime?: string;
    }

    /**
     * Represents a range of text that has been added to a document. You can use the <del> element to similarly represent a range of text that has been deleted from the document.
     */
    interface InsTagAttributes {
      cite?: string;
      datetime?: string;
    }

    /**
     * Specifies the caption (or title) of a table.
     */
    interface CaptionTagAttributes {
      /** @deprecated */
      align?: "left" | "top" | "right" | "bottom";
    }

    /**
     * Defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.
     */
    interface ColTagAttributes {
      span?: string;
      /** @deprecated */
      align?: "left" | "center" | "right" | "justify";
      /** @deprecated */
      bgcolor?: string;
      /** @deprecated */
      char?: string;
      /** @deprecated */
      charoff?: string;
      /** @deprecated */
      valign?: "baseline" | "bottom" | "middle" | "top";
      /** @deprecated */
      width?: string;
    }

    /**
     * Defines a group of columns within a table.
     */
    interface ColgroupTagAttributes {
      span?: string;
      /** @deprecated */
      align?: "left" | "center" | "right" | "justify" | "char";
      /** @deprecated */
      bgcolor?: string;
      /** @deprecated */
      char?: string;
      /** @deprecated */
      charoff?: string;
      /** @deprecated */
      valign?: "baseline" | "bottom" | "middle" | "top";
    }

    /**
     * Represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.
     */
    interface TableTagAttributes {
      /** @deprecated */
      align?: "left" | "center" | "right" | "left" | "center" | "right";
      /** @deprecated */
      bgcolor?: string;
      /** @deprecated */
      border?: string;
      /** @deprecated */
      cellpadding?: string;
      /** @deprecated */
      cellspacing?: string;
      /** @deprecated */
      frame?: string;
      /** @deprecated */
      rules?: "none" | "groups" | "rows" | "cols" | "all";
      /** @deprecated */
      summary?: string;
      /** @deprecated */
      width?: string;
    }

    /**
     * Encapsulates a set of table rows (<tr> elements), indicating that they comprise the body of the table (<table>).
     */
    interface TbodyTagAttributes {
      /** @deprecated */
      align?: "left" | "center" | "right" | "justify" | "char";
      /** @deprecated */
      bgcolor?: string;
      /** @deprecated */
      char?: string;
      /** @deprecated */
      charoff?: string;
      /** @deprecated */
      valign?: "baseline" | "bottom" | "middle" | "top";
    }

    /**
     * Defines a cell of a table that contains data. It participates in the table model.
     */
    interface TdTagAttributes {
      colspan?: string;
      headers?: string;
      rowspan?: string;
      /** @deprecated */
      abbr?: string;
      /** @deprecated */
      align?: "left" | "center" | "right" | "justify" | "char";
      /** @deprecated */
      axis?: string;
      /** @deprecated */
      bgcolor?: string;
      /** @deprecated */
      char?: string;
      /** @deprecated */
      charoff?: string;
      /** @deprecated */
      height?: string;
      /** @deprecated */
      scope?: string;
      /** @deprecated */
      valign?: "baseline" | "bottom" | "middle" | "top";
      /** @deprecated */
      width?: string;
    }

    /**
     * Defines a set of rows summarizing the columns of the table.
     */
    interface TfootTagAttributes {
      /** @deprecated */
      align?: "left" | "center" | "right" | "justify" | "char";
      /** @deprecated */
      bgcolor?: string;
      /** @deprecated */
      char?: string;
      /** @deprecated */
      charoff?: string;
      /** @deprecated */
      valign?: "baseline" | "bottom" | "middle" | "top";
    }

    /**
     * Defines a cell as a header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.
     */
    interface ThTagAttributes {
      abbr?: string;
      colspan?: string;
      headers?: string;
      rowspan?: string;
      scope?: "row" | "col" | "rowgroup" | "colgroup";
      /** @deprecated */
      align?: "left" | "center" | "right" | "justify" | "char";
      /** @deprecated */
      axis?: string;
      /** @deprecated */
      bgcolor?: string;
      /** @deprecated */
      char?: string;
      /** @deprecated */
      charoff?: string;
      /** @deprecated */
      height?: string;
      /** @deprecated */
      valign?: "baseline" | "bottom" | "middle" | "top";
      /** @deprecated */
      width?: string;
    }

    /**
     * Defines a set of rows defining the head of the columns of the table.
     */
    interface TheadTagAttributes {
      /** @deprecated */
      align?: "left" | "center" | "right" | "justify" | "char";
      /** @deprecated */
      bgcolor?: string;
      /** @deprecated */
      char?: string;
      /** @deprecated */
      charoff?: string;
      /** @deprecated */
      valign?: "baseline" | "bottom" | "middle" | "top";
    }

    /**
     * Defines a row of cells in a table. The row's cells can then be established using a mix of <td> (data cell) and <th> (header cell) elements.
     */
    interface TrTagAttributes {
      /** @deprecated */
      align?: "left" | "center" | "right" | "justify" | "char";
      /** @deprecated */
      bgcolor?: string;
      /** @deprecated */
      char?: string;
      /** @deprecated */
      charoff?: string;
      /** @deprecated */
      valign?: "baseline" | "bottom" | "middle" | "top";
    }

    /**
     * An interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it performs an action, such as submitting a form or opening a dialog.
     */
    interface ButtonTagAttributes {
      autofocus?: string;
      autocomplete?: string;
      disabled?: string;
      form?: string;
      formaction?: string;
      formenctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
      formmethod?: "post" | "get" | "dialog";
      formnovalidate?: string;
      formtarget?: "_self" | "_blank" | "_parent" | "_top";
      name?: string;
      popovertarget?: string;
      popovertargetaction?: "hide" | "show" | "toggle";
      type?: "submit" | "reset" | "button";
      value?: string;
    }

    /**
     * Contains a set of <option> elements that represent the permissible or recommended options available to choose from within other controls.
     */
    interface DatalistTagAttributes {}

    /**
     * Used to group several controls as well as labels (<label>) within a web form.
     */
    interface FieldsetTagAttributes {
      disabled?: string;
      form?: string;
      name?: string;
    }

    /**
     * Represents a document section containing interactive controls for submitting information.
     */
    interface FormTagAttributes {
      /** @deprecated */
      accept?: string;
      "accept-charset"?: string;
      autocapitalize?: "none" | "sentences" | "words" | "characters";
      autocomplete?: "off" | "on";
      name?: string;
      rel?: string;
      action?: string;
      enctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
      method?: "post" | "get" | "dialog";
      novalidate?: string;
      target?: "_self" | "_blank" | "_parent" | "_top";
    }

    /**
     * Used to create interactive controls for web-based forms to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The <input> element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.
     */
    interface InputTagAttributes {
      accept?: string;
      alt?: string;
      autocomplete?: string;
      autofocus?: string;
      capture?: string;
      checked?: string;
      dirname?: string;
      disabled?: string;
      form?: string;
      formaction?: string;
      formenctype?: string;
      formmethod?: string;
      formnovalidate?: string;
      formtarget?: string;
      height?: string;
      id?: string;
      inputmode?: string;
      list?: string;
      max?: string;
      maxlength?: string;
      min?: string;
      minlength?: string;
      multiple?: string;
      name?: string;
      pattern?: string;
      placeholder?: string;
      popovertarget?: string;
      popovertargetaction?: "hide" | "show" | "toggle";
      readonly?: string;
      required?: string;
      size?: string;
      src?: string;
      step?: "step" | "step";
      tabindex?: string;
      title?: string;
      type?: string;
      value?: string;
      width?: string;
      autocapitalize?: "none" | "sentences" | "words" | "characters";
      autocorrect?: "on" | "off";
      incremental?: string;
      orient?: string;
      results?: string;
      webkitdirectory?: string;
    }

    /**
     * Represents a caption for an item in a user interface.
     */
    interface LabelTagAttributes {
      for?: string;
    }

    /**
     * Represents a caption for the content of its parent <fieldset>.
     */
    interface LegendTagAttributes {}

    /**
     * Represents either a scalar value within a known range or a fractional value.
     */
    interface MeterTagAttributes {
      value?: string;
      min?: string;
      max?: string;
      low?: string;
      high?: string;
      optimum?: string;
      form?: string;
    }

    /**
     * Creates a grouping of options within a <select> element.
     */
    interface OptgroupTagAttributes {
      disabled?: string;
      label?: string;
    }

    /**
     * Used to define an item contained in a select, an <optgroup>, or a <datalist> element. As such, <option> can represent menu items in popups and other lists of items in an HTML document.
     */
    interface OptionTagAttributes {
      disabled?: string;
      label?: string;
      selected?: string;
      value?: string;
    }

    /**
     * Container element into which a site or app can inject the results of a calculation or the outcome of a user action.
     */
    interface OutputTagAttributes {
      for?: string;
      form?: string;
      name?: string;
    }

    /**
     * Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
     */
    interface ProgressTagAttributes {
      max?: string;
      value?: string;
    }

    /**
     * Represents a control that provides a menu of options.
     */
    interface SelectTagAttributes {
      autocomplete?: string;
      autofocus?: string;
      disabled?: string;
      form?: string;
      multiple?: string;
      name?: string;
      required?: string;
      size?: string;
    }

    /**
     * Represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example, a comment on a review or feedback form.
     */
    interface TextareaTagAttributes {
      autocomplete?: "off" | "on";
      autocorrect?: "on" | "off";
      autofocus?: string;
      cols?: string;
      dirname?: string;
      disabled?: string;
      form?: string;
      maxlength?: string;
      minlength?: string;
      name?: string;
      placeholder?: string;
      readonly?: string;
      required?: string;
      rows?: string;
      spellcheck?: "true" | "default" | "false";
      wrap?: "hard" | "soft" | "off";
    }

    /**
     * Creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label must be provided using the <summary> element.
     */
    interface DetailsTagAttributes {
      open?: string;
    }

    /**
     * Represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.
     */
    interface DialogTagAttributes {
      open?: string;
    }

    /**
     * Specifies a summary, caption, or legend for a details element's disclosure box. Clicking the <summary> element toggles the state of the parent <details> element open and closed.
     */
    interface SummaryTagAttributes {}

    /**
     * Part of the Web Components technology suite, this element is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.
     */
    interface SlotTagAttributes {
      name?: string;
    }

    /**
     * A mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.
     */
    interface TemplateTagAttributes {}

    /**
     * Allows authors to clearly indicate a sequence of characters that compose an acronym or abbreviation for a word.
     */
    interface AcronymTagAttributes {}

    /**
     * Renders the enclosed text at a font size one level larger than the surrounding text (medium becomes large, for example). The size is capped at the browser's maximum permitted font size.
     */
    interface BigTagAttributes {}

    /**
     * Displays its block-level or inline contents centered horizontally within its containing element.
     */
    interface CenterTagAttributes {}

    /**
     * An obsolete part of the Web Components suite of technologies—was used inside of Shadow DOM as an insertion point, and wasn't meant to be used in ordinary HTML. It has now been replaced by the <slot> element, which creates a point in the DOM at which a shadow DOM can be inserted. Consider using <slot> instead.
     */
    interface ContentTagAttributes {}

    /**
     * Container for a directory of files and/or folders, potentially with styles and icons applied by the user agent. Do not use this obsolete element; instead, you should use the <ul> element for lists, including lists of files.
     */
    interface DirTagAttributes {
      /** @deprecated */
      compact?: string;
    }

    /**
     * Defines the font size, color and face for its content.
     */
    interface FontTagAttributes {
      /** @deprecated */
      color?: string;
      /** @deprecated */
      face?: string;
      /** @deprecated */
      size?: string;
    }

    /**
     * Defines a particular area in which another HTML document can be displayed. A frame should be used within a <frameset>.
     */
    interface FrameTagAttributes {
      /** @deprecated */
      src?: string;
      /** @deprecated */
      name?: string;
      /** @deprecated */
      noresize?: string;
      /** @deprecated */
      scrolling?: string;
      /** @deprecated */
      marginheight?: string;
      /** @deprecated */
      marginwidth?: string;
      /** @deprecated */
      frameborder?: string;
    }

    /**
     * Used to contain <frame> elements.
     */
    interface FramesetTagAttributes {
      /** @deprecated */
      cols?: string;
      /** @deprecated */
      rows?: string;
    }

    /**
     * An ancient and poorly supported precursor to the <img> element. It should not be used.
     */
    interface ImageTagAttributes {}

    /**
     * Used to insert a scrolling area of text. You can control what happens when the text reaches the edges of its content area using its attributes.
     */
    interface MarqueeTagAttributes {
      /** @deprecated */
      behavior?: string;
      /** @deprecated */
      bgcolor?: string;
      /** @deprecated */
      direction?: string;
      /** @deprecated */
      height?: string;
      /** @deprecated */
      hspace?: string;
      /** @deprecated */
      loop?: string;
      /** @deprecated */
      scrollamount?: string;
      /** @deprecated */
      scrolldelay?: string;
      /** @deprecated */
      truespeed?: string;
      /** @deprecated */
      vspace?: string;
      /** @deprecated */
      width?: string;
    }

    /**
     * Represents a command that a user is able to invoke through a popup menu. This includes context menus, as well as menus that might be attached to a menu button.
     */
    interface MenuitemTagAttributes {
      /** @deprecated */
      checked?: string;
      /** @deprecated */
      command?: string;
      /** @deprecated */
      default?: string;
      /** @deprecated */
      disabled?: string;
      /** @deprecated */
      icon?: string;
      label?: string;
      /** @deprecated */
      radiogroup?: string;
      /** @deprecated */
      type?: "command" | "checkbox" | "radio";
    }

    /**
     * Prevents the text it contains from automatically wrapping across multiple lines, potentially resulting in the user having to scroll horizontally to see the entire width of the text.
     */
    interface NobrTagAttributes {}

    /**
     * An obsolete, non-standard way to provide alternative, or "fallback", content for browsers that do not support the embed element or do not support the type of embedded content an author wishes to use. This element was deprecated in HTML 4.01 and above in favor of placing fallback content between the opening and closing tags of an <object> element.
     */
    interface NoembedTagAttributes {}

    /**
     * Provides content to be presented in browsers that don't support (or have disabled support for) the <frame> element. Although most commonly-used browsers support frames, there are exceptions, including certain special-use browsers including some mobile browsers, as well as text-mode browsers.
     */
    interface NoframesTagAttributes {}

    /**
     * Defines parameters for an <object> element.
     */
    interface ParamTagAttributes {
      /** @deprecated */
      name?: string;
      /** @deprecated */
      value?: string;
      /** @deprecated */
      type?: string;
      /** @deprecated */
      valuetype?: "data" | "ref" | "object";
    }

    /**
     * Renders everything following the start tag as raw text, ignoring any following HTML. There is no closing tag, since everything after it is considered raw text.
     */
    interface PlaintextTagAttributes {}

    /**
     * Used to delimit the base text component of a ruby annotation, i.e. the text that is being annotated. One <rb> element should wrap each separate atomic segment of the base text.
     */
    interface RbTagAttributes {}

    /**
     * Embraces semantic annotations of characters presented in a ruby of <rb> elements used inside of <ruby> element. <rb> elements can have both pronunciation (<rt>) and semantic (<rtc>) annotations.
     */
    interface RtcTagAttributes {}

    /**
     * An obsolete part of the Web Components technology suite that was intended to be used as a shadow DOM insertion point. You might have used it if you have created multiple shadow roots under a shadow host. Consider using <slot> instead.
     */
    interface ShadowTagAttributes {}

    /**
     * Places a strikethrough (horizontal line) over text.
     */
    interface StrikeTagAttributes {}

    /**
     * Creates inline text which is presented using the user agent default monospace font face. This element was created for the purpose of rendering text as it would be displayed on a fixed-width display such as a teletype, text-only screen, or line printer.
     */
    interface TtTagAttributes {}

    /**
     * Renders text between the start and end tags without interpreting the HTML in between and using a monospaced font. The HTML2 specification recommended that it should be rendered wide enough to allow 80 characters per line.
     */
    interface XmpTagAttributes {}
  }
}
