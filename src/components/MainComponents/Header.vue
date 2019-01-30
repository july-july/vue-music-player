<template>
    <div class="container header">
      <div class="row align-items-center justify-content-between height-100">
        <div class="col-xl-2">
          LOGO
        </div>
        <div class="col-xl-5 no-gutters d-flex align-items-center justify-content-between">
          <div class="search-area col-xl-7">
            <input type="text">
            <button>
              <i class="fa fa-search"></i>
            </button>
          </div>
          <div class="col-xl-4 text-right">
            <a href="" class="add-sond">Add song</a>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss">
  .header {
    height: 70px;
    background: rgba(0, 0, 0, 0.81);
    width: 100%;
    /*background-image: linear-gradient(to right, #de13bb, #c60eb1, #af08a6, #98049a, #82008e);*/
    /*box-shadow: 0px 0px 4px 0px white;*/
    margin-bottom: 10px;
    .search-area {
      input {
        background: transparent;
        box-shadow: none;
        outline: none;
        border: 2px solid #ffffff96;
        border-radius: 20px;
        color: white;
        padding: 3px 29px 3px 10px;
      }
      button {
        position: absolute;
        right: 15px;
        top: 1px;
        background-image: linear-gradient(to right, #de13bb, #c60eb1, #af08a6, #98049a, #82008e);
        color: white;
        border: none;
        border-radius: 20px;
        padding: 4px 10px;

        &:focus {
          outline: none;
        }
      }
    }

  }
</style>
