export const RentWidget = ({ info }) => {
  return (
    <section
      className="w-full bg-white mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-8"
      id="rentwidget"
    >
      <div id="realtymx_idx">
        <script
          data-order="asc"
          data-status="2"
          data-client_id="1721"
          data-sort="price"
          data-page="properties"
          src="https://idx.realtymx.com/widget/idx.js"
        ></script>
      </div>
    </section>
  );
};
