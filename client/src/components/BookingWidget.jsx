import { useEffect, useRef } from "react";

function BookingWidget() {
  const widgetContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//widget.simplybook.me/v2/widget/widget.js";
    script.onload = () => {
      // eslint-disable-next-line no-undef
      new SimplybookWidget({
        widget_type: "iframe",
        url: "https://gardenomyoga.simplybook.me",
        theme: "tender",
        theme_settings: {
          sb_base_color: "#044418",
          timeline_hide_unavailable: "1",
          hide_past_days: "0",
          timeline_show_end_time: "0",
          timeline_modern_display: "as_slots",
          display_item_mode: "block",
          booking_nav_bg_color: "#dbb72a",
          body_bg_color: "#949187",
          sb_review_image: "",
          dark_font_color: "#010502",
          light_font_color: "#edece8",
          btn_color_1: "#dbb72a",
          sb_company_label_color: "#044418",
          hide_img_mode: "0",
          show_sidebar: "1",
          sb_busy: "#706565",
          sb_available: "#d6ebff",
        },
        timeline: "modern",
        datepicker: "top_calendar",
        is_rtl: false,
        app_config: {
          clear_session: 0,
          allow_switch_to_ada: 1,
          predefined: [],
        },
        container_id: "sbw_sh3ds8",
      });
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="sbw_sh3ds8" ref={widgetContainerRef}></div>;
}

export default BookingWidget;
