import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import { Flex, Text } from "@chakra-ui/react";
import Card from "../widgets/cards/card";
import CardHeader from "../widgets/cards/cardheader";

const Calender = () => {
  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <Card>
        <CardHeader mb="24px">
          <Flex direction="column">
            <Text color="#fff" fontSize="lg" fontWeight="bold" mb="4px">
              Calender
            </Text>
            <Text color="gray.400" fontSize="sm">
              Your Events are as follows
            </Text>
          </Flex>
        </CardHeader>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          contentHeight="600"
          events={calendarDataExample}
          editable={true}
          minHeight="400px"
          height="400px"
          slotWidth={10}
          customIcons={false}
          eventColor={"#ffffff"}
          contentColor={"#ffffff"}
        />
      </Card>
    </Flex>
  );
};

const calendarDataExample = [
  {
    title: "All day conference",
    borderColor: "white",
    start: "2021-10-01",
    end: "2021-10-01",
    backgroundColor: "#68D391",
    className: "success",
  },
  {
    title: "Meeting with Mary",
    borderColor: "white",
    start: "2021-10-03",
    end: "2021-10-03",
    backgroundColor: "#F6AD55",
    className: "info",
  },
  {
    title: "Cyber Week",
    borderColor: "white",
    start: "2021-10-04",
    end: "2021-10-04",
    backgroundColor: "#805AD5",
    className: "warning",
  },
  {
    title: "Winter Hackaton",
    borderColor: "white",
    start: "2021-10-05",
    end: "2021-10-05",
    backgroundColor: "#0BC5EA",
    className: "error",
  },
  {
    title: "Digital event",
    borderColor: "white",
    start: "2021-10-09",
    end: "2021-10-11",
    backgroundColor: "#4FD1C5",
    className: "warning",
  },
  {
    title: "Dinner with Family",
    borderColor: "white",
    start: "2021-10-21",
    end: "2021-10-21",
    backgroundColor: "#F6AD55",
    className: "error",
  },
  {
    title: "Black Friday",
    borderColor: "white",
    start: "2021-10-25",
    end: "2021-10-25",
    backgroundColor: "#0BC5EA",
    className: "info",
  },
];

export default Calender;
