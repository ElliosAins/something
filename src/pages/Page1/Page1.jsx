import "./Page1.css"

import Blog_item from "../Page1/compoments//Blog_item/Blog_item"
import Projects_item from "../Page1/compoments//Projects_item/Projects_item"
import HThxI from "../Page1/compoments//HThxI/HThxI"
import SectionI from "../Page1/compoments//SectionI/SectionI"
import SectionI2 from "../Page1/compoments//SectionI2/SectionI2"

import GroupI from'../Page1/compoments//GroupI/GroupI'
import img from './assets/images/img.png'
import img1 from'./assets/images/nn.png'
import img2 from'./assets/images/pp.png'

function Page1(props) {
  return (
    <>
        <div className="page1_page1">
        <div className="page1_box">
        <header>
          <nav>
            <div className="page1_n_logo">
              <p className="page1_logo">
                <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 0L19.2209 10.8982L27.9274 3.97724L22.6235 13.7533L33.7417 14.048L23.3948 18.1276L31.7224 25.5L21.1739 21.9743L22.8143 32.9748L17 23.4934L11.1857 32.9748L12.8261 21.9743L2.27757 25.5L10.6052 18.1276L0.258268 14.048L11.3765 13.7533L6.07261 3.97724L14.7791 10.8982L17 0Z" fill="white"/>
                </svg>
              Influenzilla
              </p>
              <p className="page1_n_l_p">bespoke design and <br/>marketing services</p>
            </div>
            <div className="page1_n_bb">
              <div className="page1_n_bi">
                <div className="page1_n_i1">ABOUT</div>
                <div className="page1_n_i1">SERVISES</div>
                <div className="page1_n_i1">CASES</div>
                <div className="page1_n_i1">TEAM</div>
                <div className="page1_lang">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C3.58832 0 0 3.58832 0 8C0 12.4117 3.58832 16 8 16C12.4117 16 16 12.4117 16 8C16 3.58832 12.4117 0 8 0ZM15.2282 7.61905H12.6935C12.622 4.88889 11.7818 2.55746 10.5218 1.21625C13.1608 2.19939 15.0756 4.68064 15.2282 7.61905ZM7.6221 0.797715C7.6221 0.810611 7.61912 0.825494 7.61912 0.83839V7.61909H4.06864C4.17579 4.09629 5.72729 1.14794 7.6221 0.797715ZM7.61912 8.38095V15.1617C7.61912 15.1745 7.6221 15.1894 7.6221 15.2023C5.72526 14.8521 4.17371 11.9038 4.06959 8.38099L7.61912 8.38095ZM8.37805 15.2023C8.37805 15.1894 8.38103 15.1745 8.38103 15.1616V8.38091H11.9315C11.8244 11.9037 10.2729 14.8521 8.37805 15.2023ZM8.38103 7.61905V0.838349C8.38103 0.825453 8.37805 0.81057 8.37805 0.797674C10.2749 1.14787 11.8264 4.09621 11.9306 7.61901L8.38103 7.61905ZM5.47817 1.21625C4.21826 2.55751 3.37798 4.88889 3.30654 7.61905H0.771809C0.924587 4.68064 2.83934 2.19937 5.47817 1.21625ZM0.771886 8.38095H3.30662C3.37804 11.1111 4.21831 13.4425 5.47825 14.7837C2.83926 13.8006 0.924521 11.3194 0.771886 8.38095ZM10.522 14.7837C11.7819 13.4425 12.6222 11.1111 12.6936 8.38095H15.2283C15.0756 11.3194 13.1608 13.8006 10.522 14.7837Z" fill="white"/>
                  </svg>
                </div>
              </div>
              <div className="page1_n_bi">
                <div className="page1_n_i2">BOOST PROGRAM</div>
                <div className="page1_n_i2">PRODUCTS</div>
                <div className="page1_n_i2">BOOK</div>
                <div className="page1_n_i2">BLOG</div>
              </div>
            </div>
          </nav>
          <div className="page1_h_bl">
            <div className="page1_h_i1">
              <div className="page1_h_year"><p className="page1_y2025">2025</p><p className="page1_h_y_m">hi there, let's <br/>get started!</p></div>
              <div className="page1_h_hp"><h1 className="page1_h_h1">Influence your audience</h1><p className="page1_h_h1_p">boost your brand with our <br/>marketing expertise</p></div>
            </div>
            <div className="page1_h_i2">
              <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6509 6.88508L23.0463 4.31497L21.4521 10.0746L21.3165 10.5645L21.8085 10.692L27.5936 12.1912L22.6702 15.5787L22.2514 15.8668L22.5464 16.2807L26.0143 21.1478L20.0654 20.578L19.5594 20.5295L19.5192 21.0362L19.0474 26.9938L14.8564 22.7334L14.5 22.371L14.1436 22.7334L9.95263 26.9938L9.48075 21.0362L9.44062 20.5295L8.93464 20.578L2.98566 21.1478L6.45361 16.2807L6.74857 15.8668L6.32982 15.5787L1.40637 12.1912L7.19147 10.692L7.68351 10.5645L7.54792 10.0746L5.95374 4.31497L11.3491 6.88508L11.808 7.10367L12.019 6.64125L14.5 1.20438L16.981 6.64125L17.192 7.10367L17.6509 6.88508Z" stroke="white"/>
              </svg>
              <p className="page1_h_p2">We believe in the power of digital media to transform businesses and connect them with their audiences in meaningful ways.</p>
            </div>
          </div>
          <div className="page1_h_thx">
            <HThxI text="digital branding"></HThxI>
            <HThxI text="influence marketing"></HThxI>
            <HThxI text="content creation"></HThxI>
            <HThxI text="design"></HThxI>
          </div>
        </header>
        <div className="page1_aside1">
          <div className="page1_a1_i">
            <p className="page1_a1_p1">London 2006</p>
            <div className="page1_a1_text1">
              <p className="page1_a1_p2">Our creative design bureau is based in the heart of London and specializes in digital branding, website design, and influence marketing.</p>
              <p className="page1_a1_p2">We believe in the power of digital media to transform businesses and connect them with their audiences in meaningful ways.</p>
            </div>
          </div>
          <h1 className="page1_h_h1">We turn your digital <br/>dreams into reality</h1>
          <div className="page1_a1_i">
            <div className="page1_stars">
              <svg width="77" height="29" viewBox="0 0 77 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6509 6.88512L23.0462 4.31495L21.4521 10.0746L21.3165 10.5645L21.8085 10.692L26.3746 11.8752L26.5 11.9078L26.6254 11.8752L31.1915 10.692L31.6835 10.5645L31.5479 10.0746L29.9537 4.31495L35.3491 6.88512L35.8079 7.10372L36.019 6.64129L38.5 1.20439L40.981 6.64129L41.192 7.10372L41.6509 6.88512L47.0462 4.31495L45.4521 10.0746L45.3165 10.5645L45.8085 10.692L50.3746 11.8752L50.5 11.9078L50.6254 11.8752L55.1915 10.692L55.6835 10.5645L55.5479 10.0746L53.9537 4.31495L59.3491 6.88512L59.8079 7.10372L60.019 6.64129L62.5 1.20439L64.981 6.64129L65.192 7.10372L65.6509 6.88512L71.0462 4.31495L69.4521 10.0746L69.3165 10.5645L69.8085 10.692L75.5936 12.1912L70.6702 15.5787L70.2514 15.8668L70.5464 16.2807L74.0143 21.1478L68.0653 20.578L67.5594 20.5295L67.5192 21.0362L67.0474 26.9937L62.8564 22.7333L62.5 22.371L62.1435 22.7333L57.9526 26.9937L57.4807 21.0362L57.4406 20.5295L56.9346 20.578L50.9857 21.1478L54.4536 16.2807L54.7486 15.8668L54.3298 15.5787L50.7834 13.1386L50.5 12.9436L50.2166 13.1386L46.6702 15.5787L46.2514 15.8668L46.5464 16.2807L50.0143 21.1478L44.0653 20.578L43.5594 20.5295L43.5192 21.0362L43.0473 26.9937L38.8564 22.7333L38.5 22.371L38.1435 22.7333L33.9526 26.9937L33.4807 21.0362L33.4406 20.5295L32.9346 20.578L26.9857 21.1478L30.4536 16.2807L30.7486 15.8668L30.3298 15.5787L26.7834 13.1386L26.5 12.9436L26.2166 13.1386L22.6702 15.5787L22.2514 15.8668L22.5464 16.2807L26.0143 21.1478L20.0653 20.578L19.5594 20.5295L19.5192 21.0362L19.0473 26.9937L14.8564 22.7333L14.5 22.371L14.1435 22.7333L9.95262 26.9937L9.48074 21.0362L9.4406 20.5295L8.93462 20.578L2.98565 21.1478L6.4536 16.2807L6.74856 15.8668L6.32981 15.5787L1.40636 12.1912L7.19145 10.692L7.6835 10.5645L7.54791 10.0746L5.95373 4.31495L11.3491 6.88512L11.8079 7.10372L12.019 6.64129L14.5 1.20439L16.981 6.64129L17.192 7.10372L17.6509 6.88512ZM50.4114 21.7051L50.1291 21.7322L50.0048 21.744L50.0003 21.7911L49.9426 21.75L49.9323 21.6422L49.7694 21.6266L49.4391 21.595L50.4114 21.7051Z" stroke="white"/>
              </svg>
            </div>
            <div className="page1_a1_text2">
              <p className="page1_a1_p2">Our team of experienced designers and marketing professionals work closely with each client to understand their unique vision and develop tailored solutions that align with their goals.</p>
              <p className="page1_a1_p2">From designing eye-catching logos and brand identities, to building custom websites that engage and convert visitors, to crafting effective influencer marketing campaigns, we are dedicated to helping our clients succeed in the digital space.</p>
            </div>
          </div>
          <div className="page1_a1_since">
            <div className="page1_a1_img1"></div>
            <div className="page1_a1_p1">since 2006</div>
          </div>
        </div>
        <div className="page1_section1">
          <SectionI class="page1_s1_i1" number="01" text="We create unique brand identities that resonate with your target audience and help you stand out in a crowded marketplace" />
          <SectionI class="page1_s1_i2" number="02" text="We build custom websites that are visually stunning, easy to navigate, and optimized for search engines" />
          <SectionI class="page1_s1_i3" number="03" text="We develop influencer campaigns that help you reach a wider audience, build brand awareness, and drive conversions" />
          <SectionI class="page1_s1_i4" number="04" text="We produce high-quality content that engages your audience, builds trust, and reinforces your brand message" />
        </div>
        <div className="page1_section2">
          <h1 className="page1_s2_h1">Help our clients achive <br/>their business objectives</h1>
          <div className="page1_s2_b">
            <div className="page1_s2_i1">
              <p className="page1_a1_p1">London 2006</p>
              <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6509 6.88508L23.0463 4.31497L21.4521 10.0746L21.3165 10.5645L21.8085 10.692L27.5936 12.1912L22.6702 15.5787L22.2514 15.8668L22.5464 16.2807L26.0143 21.1478L20.0654 20.578L19.5594 20.5295L19.5192 21.0362L19.0474 26.9938L14.8564 22.7334L14.5 22.371L14.1436 22.7334L9.95263 26.9938L9.48075 21.0362L9.44062 20.5295L8.93464 20.578L2.98566 21.1478L6.45361 16.2807L6.74857 15.8668L6.32982 15.5787L1.40637 12.1912L7.19147 10.692L7.68351 10.5645L7.54792 10.0746L5.95374 4.31497L11.3491 6.88508L11.808 7.10367L12.019 6.64125L14.5 1.20438L16.981 6.64125L17.192 7.10367L17.6509 6.88508Z" stroke="white"/>
              </svg>
            </div>
            <div className="page1_s2_i2">
              <div className="page1_s2_text">
                <div className="page1_s2_t_i">
                  <p className="page1_a1_p2">Influenzilla is a leading design and marketing agency that offers creative solutions to businesses of all sizes. Our team of experts specializes in creating unique and effective designs that help our clients stand out in a crowded market.</p>
                  <p className="page1_a1_p2">Our mission is to help our clients achieve their business objectives through innovative and effective design solutions. We believe that great design is more than just aesthetics. It's about creating a seamless user experience that engages and delights your audience.</p>
                </div>
                <div className="page1_s2_t_i">
                  <p className="page1_a1_p2">We take pride in our ability to understand the unique needs and goals of each of our clients, and to develop customized solutions that exceed their expectations. Our team of talented designers and marketers work closely with our clients to create a cohesive brand identity, effective marketing strategies, and user-friendly websites and applications.</p>
                  <p className="page1_a1_p2">We offer a wide range of services, including branding, web design, social media marketing, graphic design, and more. Our goal is to help our clients achieve success by providing them with the tools and resources they need to grow their business.</p>
                </div>
              </div>
              <div className="page1_s2_bi">
                <SectionI2 img="s2_i_img1" title="Branding" text="Our team of experts specializes in creating unique and effective designs "></SectionI2>
                <SectionI2 img="s2_i_img2" title="Design" text="Innovative and effective design solutions for business of our clients"></SectionI2>
                <SectionI2 img="s2_i_img3" title="Marketing" text="Our team of experienced designers and marketing professionals work closely "></SectionI2>
              </div>
              <p className="page1_s2_p2">We specialize in creating unique and innovative designs that not only capture the essence of your business but also help you achieve your goals. We believe that great design is about creating a seamless user experience that engages and delights your audience, and we work hard to ensure that every design we create meets this high standard.</p>
            </div>
          </div>
        </div>












        <div className="page1_th6">
<h2 className='h2'>Expertise and experience</h2>
<p className='p'>We believe that building long-lasting relationships with our clients is key to achieving success. We are passionate about what we do, and we are committed to delivering exceptional results for every client we work with.</p>
    </div>
    <div className="page1_th7">
      <div className="page1_images"></div>
      <p className='page1_par'>Our team of talented designers and marketers works closely with each of our clients, taking the time to understand their unique needs and goals, and developing customized solutions that exceed their expectations. 

We take pride in our ability to create a cohesive brand identity, effective marketing strategies, and user-friendly websites and applications that help our clients achieve success</p>
      <p className='page1_par'>So if you're a start-up looking to create a strong brand identity, or an established business looking to revamp your marketing strategy, we have the expertise and experience to help you succeed. 

Contact us today to learn more about our services and how we can help your business grow. We look forward to hearing from you and starting this exciting journey together.</p>
    </div>
    <div className="page1_group30">
      <p className='page1_fff'>for your business</p>
       <p className='page1_ff'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo laboriosam animi quidem esse cum, optio quaerat dolores vero eius repellat praesentium vel? Vitae eligendi magni perspiciatis rerum obcaecati inventore adipisci.</p>
     <div className="page1_compon">
     <GroupI text="jack jonson" images={img} title="manager"></GroupI>
      <GroupI text="kate middleton" images={img1} title="designer"></GroupI>
      <GroupI text="Oliver Twist" images={img2} title="CEO"></GroupI> 
     </div>
    </div>










          <div className="page1_blog">
            <p className="page1_blog_text1 gr">
              Welcome to our <br/> team blog
            </p>
            <p className="page1_blog_text2 gr">
              ˜˜˜˜˜˜˜˜˜˜
            </p>
            <div className="page1_blog_block">
              <Blog_item display="Blog_item none" text1="" text2="" text3=""></Blog_item>
              <Blog_item display="Blog_item block" text11="05.03.2023" text22="Techno startup" text33="We partnered with a technology startup to create a new website that would showcase their innovative product and attract investors." text1="01.02.2022" text2="Brand identity" text3="Our team developed a new logo, packaging design, and website layout that reflected the company's commitment to sustainability and health."></Blog_item>
              <Blog_item display="Blog_item block" text11="05.03.2023" text22="Modern layout" text33="We partnered with a technology startup to create a new website that would showcase their innovative product and attract investors." text1="23.06.2022" text2="Web design" text3="Our team developed a new logo, packaging design, and website layout that reflected the company's commitment to sustainability and health."></Blog_item>
              <Blog_item display="Blog_item block" text11="05.03.2023" text22="Skills and experience" text33="We partnered with a technology startup to create a new website that would showcase their innovative product and attract investors." text1="16.01.2023" text2="Brand identity" text3="Our team developed a new logo, packaging design, and website layout that reflected the company's commitment to sustainability and health."></Blog_item>
            </div>
            <svg className="page1_Blog_img2" width="77" height="29" viewBox="0 0 77 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4306 6.88512L22.826 4.31495L21.2318 10.0746L21.0962 10.5645L21.5882 10.692L26.1543 11.8752L26.2797 11.9078L26.4051 11.8752L30.9712 10.692L31.4632 10.5645L31.3276 10.0746L29.7335 4.31495L35.1288 6.88512L35.5877 7.10372L35.7987 6.64129L38.2797 1.20439L40.7607 6.64129L40.9717 7.10372L41.4306 6.88512L46.826 4.31495L45.2318 10.0746L45.0962 10.5645L45.5882 10.692L50.1543 11.8752L50.2797 11.9078L50.4051 11.8752L54.9712 10.692L55.4632 10.5645L55.3276 10.0746L53.7335 4.31495L59.1288 6.88512L59.5877 7.10372L59.7987 6.64129L62.2797 1.20439L64.7607 6.64129L64.9717 7.10372L65.4306 6.88512L70.826 4.31495L69.2318 10.0746L69.0962 10.5645L69.5882 10.692L75.3733 12.1912L70.4499 15.5787L70.0311 15.8668L70.3261 16.2807L73.794 21.1478L67.8451 20.578L67.3391 20.5295L67.299 21.0362L66.8271 26.9937L62.6362 22.7333L62.2797 22.371L61.9233 22.7333L57.7323 26.9937L57.2605 21.0362L57.2203 20.5295L56.7144 20.578L50.7654 21.1478L54.2333 16.2807L54.5283 15.8668L54.1095 15.5787L50.5631 13.1386L50.2797 12.9436L49.9963 13.1386L46.4499 15.5787L46.0311 15.8668L46.3261 16.2807L49.794 21.1478L43.8451 20.578L43.3391 20.5295L43.299 21.0362L42.8271 26.9937L38.6362 22.7333L38.2797 22.371L37.9233 22.7333L33.7323 26.9937L33.2605 21.0362L33.2203 20.5295L32.7144 20.578L26.7654 21.1478L30.2333 16.2807L30.5283 15.8668L30.1095 15.5787L26.5631 13.1386L26.2797 12.9436L25.9963 13.1386L22.4499 15.5787L22.0311 15.8668L22.3261 16.2807L25.794 21.1478L19.8451 20.578L19.3391 20.5295L19.299 21.0362L18.8271 26.9937L14.6362 22.7333L14.2797 22.371L13.9233 22.7333L9.73234 26.9937L9.26046 21.0362L9.22033 20.5295L8.71435 20.578L2.76538 21.1478L6.23332 16.2807L6.52828 15.8668L6.10953 15.5787L1.18608 12.1912L6.97118 10.692L7.46322 10.5645L7.32763 10.0746L5.73345 4.31495L11.1288 6.88512L11.5877 7.10372L11.7987 6.64129L14.2797 1.20439L16.7607 6.64129L16.9717 7.10372L17.4306 6.88512ZM50.1912 21.7051L49.9088 21.7322L49.7846 21.744L49.78 21.7911L49.7223 21.75L49.712 21.6422L49.5492 21.6266L49.2189 21.595L50.1912 21.7051Z" stroke="white"/>
            </svg>
          </div>
          <div className="page1_client">
            <div className="page1_clients_block1">
              <p className="page1_client_text1 gr">
                Projects for our <br/> clients
              </p>
              <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.6509 6.88508L23.0463 4.31497L21.4521 10.0746L21.3165 10.5645L21.8085 10.692L27.5936 12.1912L22.6702 15.5787L22.2514 15.8668L22.5464 16.2807L26.0143 21.1478L20.0654 20.578L19.5594 20.5295L19.5192 21.0362L19.0474 26.9938L14.8564 22.7334L14.5 22.371L14.1436 22.7334L9.95263 26.9938L9.48075 21.0362L9.44062 20.5295L8.93464 20.578L2.98566 21.1478L6.45361 16.2807L6.74857 15.8668L6.32982 15.5787L1.40637 12.1912L7.19147 10.692L7.68351 10.5645L7.54792 10.0746L5.95374 4.31497L11.3491 6.88508L11.808 7.10367L12.019 6.64125L14.5 1.20438L16.981 6.64125L17.192 7.10367L17.6509 6.88508Z" stroke="white"/>
              </svg>

            </div>
            <div className="page1_clients_block2">
              <p className="page1_clients_text2 gr">Since 2006</p>
              <p className="page1_clients_text3">At Influenzilla, we believe that building long-lasting relationships with our clients is key to achieving success. We are passionate about what we do, and we are committed to delivering exceptional results for every client we work with.</p>
              <p className="page1_clients_text3">So if you're a start-up looking to create a strong brand identity, or an established business looking to revamp your marketing strategy, we havethe expertise and experience to help you succeed.</p>
            </div>
          </div>
          <div className="page1_projects">
            <Projects_item bg="back1" text1="branding" text2="Food store  identity" text3="We worked with a local health food store to create a new brand identity that was both modern and eco-friendly."></Projects_item>
            <Projects_item bg="back2" text1="branding" text2="Technology startup site" text3="We worked with a local health food store to create a new brand identity that was both modern and eco-friendly."></Projects_item>
            <Projects_item bg="back3" text1="branding" text2="Fashion instagram marketing" text3="Our team helped a new fashion brand grow their Instagram following by over 200% in just three months."></Projects_item>
            <Projects_item bg="back4" text1="branding" text2="Mobile and desktop services" text3="Developing modern websites that are optimized for both desktop and mobile devices."></Projects_item>
            <Projects_item bg="back5" text1="branding" text2="Eco packaging design" text3="We worked with a local health food store to create a new brand identity that was both modern and eco-friendly."></Projects_item>
            <Projects_item bg="back6" text1="branding" text2="Social media graphics" text3="We worked with a local health food store to create a new brand identity that was both modern and eco-friendly."></Projects_item>
          </div>
          <nav className='bg'>
            <div className="page1_n_logo">
              <p className="page1_logo">
                <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 0L19.2209 10.8982L27.9274 3.97724L22.6235 13.7533L33.7417 14.048L23.3948 18.1276L31.7224 25.5L21.1739 21.9743L22.8143 32.9748L17 23.4934L11.1857 32.9748L12.8261 21.9743L2.27757 25.5L10.6052 18.1276L0.258268 14.048L11.3765 13.7533L6.07261 3.97724L14.7791 10.8982L17 0Z" fill="white"/>
                </svg>
              Influenzilla
              </p>
              <p className="page1_n_l_p">bespoke design and <br/>marketing services</p>
            </div>
            <div className="page1_n_bb">
              <div className="page1_n_bi">
                <div className="page1_n_i1">ABOUT</div>
                <div className="page1_n_i1">SERVISES</div>
                <div className="page1_n_i1">CASES</div>
                <div className="page1_n_i1">TEAM</div>
                <div className="page1_lang">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C3.58832 0 0 3.58832 0 8C0 12.4117 3.58832 16 8 16C12.4117 16 16 12.4117 16 8C16 3.58832 12.4117 0 8 0ZM15.2282 7.61905H12.6935C12.622 4.88889 11.7818 2.55746 10.5218 1.21625C13.1608 2.19939 15.0756 4.68064 15.2282 7.61905ZM7.6221 0.797715C7.6221 0.810611 7.61912 0.825494 7.61912 0.83839V7.61909H4.06864C4.17579 4.09629 5.72729 1.14794 7.6221 0.797715ZM7.61912 8.38095V15.1617C7.61912 15.1745 7.6221 15.1894 7.6221 15.2023C5.72526 14.8521 4.17371 11.9038 4.06959 8.38099L7.61912 8.38095ZM8.37805 15.2023C8.37805 15.1894 8.38103 15.1745 8.38103 15.1616V8.38091H11.9315C11.8244 11.9037 10.2729 14.8521 8.37805 15.2023ZM8.38103 7.61905V0.838349C8.38103 0.825453 8.37805 0.81057 8.37805 0.797674C10.2749 1.14787 11.8264 4.09621 11.9306 7.61901L8.38103 7.61905ZM5.47817 1.21625C4.21826 2.55751 3.37798 4.88889 3.30654 7.61905H0.771809C0.924587 4.68064 2.83934 2.19937 5.47817 1.21625ZM0.771886 8.38095H3.30662C3.37804 11.1111 4.21831 13.4425 5.47825 14.7837C2.83926 13.8006 0.924521 11.3194 0.771886 8.38095ZM10.522 14.7837C11.7819 13.4425 12.6222 11.1111 12.6936 8.38095H15.2283C15.0756 11.3194 13.1608 13.8006 10.522 14.7837Z" fill="white"/>
                  </svg>
                </div>
              </div>
              <div className="page1_n_bi">
                <div className="page1_n_i2">BOOST PROGRAM</div>
                <div className="page1_n_i2">PRODUCTS</div>
                <div className="page1_n_i2">BOOK</div>
                <div className="page1_n_i2">BLOG</div>
              </div>
            </div>
          </nav>
      </div>
        </div>
    </>
  )
}

export default Page1;