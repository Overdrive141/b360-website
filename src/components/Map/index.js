import React, { useState, useEffect, useCallback } from "react";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
  geocodeByLatLng,
} from "react-google-places-autocomplete";
import ReactMapGL, { Marker } from "react-map-gl";
import { useWatch } from "react-hook-form";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { Box, FormErrorMessage, FormLabel, Spacer } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { areArraysEqual } from "utils/areArraysEqual";

// import { InputFieldWrapper } from "components/InputField";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const mapBoxAccessToken =
  "pk.eyJ1Ijoic3VibG9kZXYiLCJhIjoiY2t0cjA3bGY3MHBiajJvbnF6c3hhbWh1ZCJ9.gdy6oVqTlUiVTe76fwuAnQ"; // Move to ENV later
//   "sk.eyJ1Ijoic3VibG9kZXYiLCJhIjoiY2t0cjBhaWVkMTF2eTJubXBqcDE1ZzN5eiJ9.PgDjh9EXGAzwCft27TNaeg";

/**
 * 
 * @Overdrive141 Set Error Manually for Address in the form that it is being used in
 * @example:       
 *    setError("location.address", {
        type: "manual",
        message: "Location is required",
      }); 
 */

const Map = ({
  width,
  height,
  register,
  setValue,
  getValues,
  setError,
  errors,
  value,
  clearErrors,
}) => {
  const [userLoc, setUserLoc] = useState({
    latitude: getValues(value)
      ? getValues(value).location?.coordinates[0]
      : 33.6844,
    longitude: getValues(value)
      ? getValues(value).location?.coordinates[1]
      : 73.0479,
  });

  /**
   *   location: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number],
      default: [0, 0],
    },
  },
   */

  useEffect(() => {
    register(`${value}.location.coordinates`); // Custom Register
    register(`${value}.location.type`); // Custom Register
    register(`${value}.address`);
  }, [register]);

  useEffect(() => {
    if (!getValues(value)) {
      // Add New
      setValue(`${value}.address`, "");
    }
    setValue(`${value}.location.coordinates`, [
      userLoc.latitude,
      userLoc.longitude,
    ]); // Initial Value
    setValue(`${value}.location.type`, "Point"); // Custom Register
  }, [userLoc]);

  useEffect(() => {
    if (
      !getValues(value) ||
      areArraysEqual(getValues(value).location.coordinates, [33.6844, 73.0479])
    ) {
      setError("location.address", {
        type: "required",
        message: "Location is required",
      });
    }
  }, [setError]);

  // Only rerender markers if props.data has changed
  //   const markers = useMemo(() => data.map(city => (
  //       <Marker key={city.name} longitude={city.longitude} latitude={city.latitide}>
  //           <img src="ping.png"/>
  //       </Marker>
  //   )), [props.data])

  const [viewport, setViewport] = useState({
    width: width,
    height: height,
    latitude: getValues(value)
      ? getValues(value).location?.coordinates[0]
      : 33.6844,
    longitude: getValues(value)
      ? getValues(value).location?.coordinates[1]
      : 73.0479,
    zoom: 10,
  });

  const [userAddress, setUserAddress] = useState("");

  useEffect(
    () =>
      getValues(value)
        ? setUserAddress(getValues(value).address)
        : setUserAddress(""),
    []
  );

  const onMarkerDragEnd = useCallback((e) => {
    setUserLoc((prev) => ({
      ...prev,
      latitude: e.lngLat[1],
      longitude: e.lngLat[0],
    }));

    geocodeByLatLng({ lat: e.lngLat[1], lng: e.lngLat[0] })
      .then((results) => {
        setValue(`${value}.address`, results[0].formatted_address); // Initial Value
        clearErrors("location.address");
        setUserAddress(results[0].formatted_address); // Trigger Rerender
      })
      .catch((error) => console.error(error));
  }, []);

  const updateLocation = useCallback((e) => {
    console.log("UpdateLoc ", e);
    geocodeByAddress(e.label)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        setUserLoc((prev) => ({ ...prev, latitude: lat, longitude: lng }));
        setViewport((prev) => ({ ...prev, latitude: lat, longitude: lng }));
        setValue(`${value}.address`, e.label); // Initial Value
        clearErrors("location.address");
      })
      .catch((err) => console.error(err));
    console.log(userLoc);
    console.log(e, "updateLoc");
    //   setUserLoc({latitude, longitude})
  }, []);

  return (
    <>
      <FormLabel>Location</FormLabel>
        <GooglePlacesAutocomplete
          apiKey="AIzaSyDsi9QJanCaHPjrONtoNIKTJW7RmnKvjHI"
          selectProps={{
            onChange: updateLocation,
            inputValue: userAddress,
            placeholder: "Start Typing an Address",
          }}
        />
        <FormErrorMessage>
          {errors.location?.address && errors.location?.address?.message}
        </FormErrorMessage> 

      <Box mt={5} />
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={mapBoxAccessToken}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={setViewport}
      >
        <Marker
          draggable
          onDragEnd={onMarkerDragEnd}
          latitude={userLoc.latitude}
          longitude={userLoc.longitude}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <FaMapMarkerAlt color="red" size="30" />
        </Marker>
      </ReactMapGL>
    </>
  );
};

export default Map;
