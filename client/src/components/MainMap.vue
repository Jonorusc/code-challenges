<template>
  <section id="map">
    <l-map
      ref="map"
      :useGlobalLeaflet="false"
      :options="{ zoomControl: false }"
      :zoom="zoom"
      :center="[47.41322, -1.219482]"
      class="map"
    >
      <!-- gives option to choose layers and zoom -->
      <l-control-layers position="topright" />
      <l-control-zoom position="topright" />

      <l-tile-layer
        v-for="tileProvider in tileProviders"
        :key="tileProvider.name"
        :name="tileProvider.name"
        :visible="tileProvider.visible"
        :url="tileProvider.url"
        :attribution="tileProvider.attribution"
        layer-type="base"
      />
    </l-map>
    <div class="company-details" position="bottomleft">
      <div class="details-head">
        <div class="company-managers">
          <h4 class="name">Nome da empresa</h4>
          <h5 class="rep">Nome do representante</h5>
        </div>
        <i class="fi fi-rr-building"></i>
      </div>
      <div class="company-content">
        <ul class="content-list">
          <li class="list-item">
            <div class="item-name">
              <i class="fi fi-rr-envelope"></i>
              <span>E-mail</span>
            </div>
            <div class="item-value">
              <span>valor</span>
            </div>
          </li>
          <li class="list-item">
            <div class="item-name">
              <i class="fi fi-rr-marker"></i>
              <span>Localizaçao</span>
            </div>
            <div class="item-value">
                <span>valasdasdasr</span>
            </div>
          </li>
          <li class="list-item">
            <div class="item-name">
              <i class="fi fi-rr-star"></i>
              <span>Categoria</span>
            </div>
            <div class="item-value">
              <div class="bg">
                <span>Categoria</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import "leaflet/dist/leaflet.css";

import {
  LMap,
  LTileLayer,
  LControlLayers,
  LControlZoom,
  LPopup,
} from "@vue-leaflet/vue-leaflet";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainMap",
  components: {
    LMap,
    LTileLayer,
    LControlLayers,
    LControlZoom,
  },
  setup() {
    return {
      zoom: 16,
      tileProviders: [
        {
          name: "OpenStreetMap",
          visible: true,
          attribution:
            '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        },
        {
          name: "OpenTopoMap",
          visible: false,
          url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
          attribution:
            'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
        },
        {
          name: "Satelite",
          visible: false,
          url: "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
          attribution:
            'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
        },
      ],
    };
  },
  computed: {
    iconUrl() {
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Google_Maps_pin.svg/274px-Google_Maps_pin.svg.png`;
    },
  },
  methods: {},
});
</script>
<style lang="scss" scoped>
#map {
  @media screen and (max-width: 1054px) {
    margin-left: 0;
    width: 100%;
    padding: 0;
    border-radius: unset;
    .map {
      border-radius: unset;
    }
  }

  margin-left: 29rem;
  width: calc(100% - 29rem);
  height: 100%;
  padding: 0 2rem 2rem 2rem;
  border-radius: 1.4rem;
  filter: drop-shadow(0 0rem 0rem rgba(0, 0, 0, 0.1));
  .map {
    height: 100%;
    width: 100%;
    position: unset;
    border-radius: inherit;
    filter: inherit;
  }

  /* company */
  .company-details {
    position: fixed;
    bottom: 4rem;
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
    left: 6rem;
    border-radius: 1.2rem;
    z-index: 40;
    padding: 2rem;
    background-color: white;
    width: 40rem;
    box-sizing: border-box;

    @media screen and (max-width: 425px) {
      left: 2rem;
      width: 100%;
      padding: 2rem 1rem;
      left: 0;
      bottom: 8rem;
      border-radius: unset;
    }

    .details-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      .company-managers {
        display: flex;
        flex-direction: column;
        row-gap: 0.2rem;
        color: $labels;
        text-transform: capitalize;
        .name {
          font-size: 2rem;
          font-weight: 600;
          margin: 0;
          line-height: 1.8rem;
        }
        .rep {
          margin: 0;
          font-size: 1.4rem;
          font-weight: 400;
        }
      }
      i {
        font-size: 2.5rem;
        font-weight: unset;
        color: $primary;
      }
    }

    .company-content {
      .content-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        row-gap: 0.4rem;
        .list-item {
          text-align: flex-start;
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          .item-name {
            display: flex;
            align-items: center;
            width: 17rem;
            column-gap: 0.8rem;
            i {
              font-size: 1.8rem;
              line-height: 1.8rem;
              color: #bebebe;
            }
            span {
              font-size: 1.4rem;
              font-weight: 600;
              color: #bebebe;
            }
          }
          .item-value {
            display: inline-flex;
            align-items: center;
            column-gap: 0.5rem;
            text-align: start;
            span {
              font-size: 1.4rem;
              font-weight: 600;
              color: $labels;
            }
            .bg {
              background-color: $backgroundLight;
              padding: 0.6rem 3rem;
              border-radius: 3rem;
              span {
                color: $labels;
              }
            }
          }
        }
      }
    }
  }
}
</style>
